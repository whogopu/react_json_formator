import React, { useEffect, useState, Fragment } from 'react'
import { getDataFromApi } from '../utils'

const Formator = () => {
  const [data, setData] = useState()

  useEffect(() => {
    getDataFromApi('/data/json4.json')
      .then(res => setData(res))
  }, [])

  if (!data) return null

  const getType = v => {
    let type = {
      isNull: false,
      isUndef: false,
      isObj: false,
      isArr: false,
      isStrNum: false
    };

    if (typeof v === 'undefined') {
      type.isUndef = true
    } else if (v === null) {
      type.isNull = true
    } else if (Array.isArray(v)) {
      type.isArr = true
    } else if (!type.isArr && typeof v === 'object') {
      type.isObj = true
    } else {
      type.isStrNum = true
    }

    return type;
  }

  const currState = {};

  const getTableDatas = (key, val, isCollapsed, type) => {
    const {
      isNull = false,
      isUndef = false,
      isArr = false,
      isStrNum = false,
      isObj = false
    } = {} = type;

    let isPrimitive = isStrNum || isNull || isUndef;

    let label = (
      <td className="treeLabelCell">
        <span className="treeIcon">{!isPrimitive ? isCollapsed ? '+' : '-' : ''}</span>
        <span className="treeLabel stringLabel">
          {key}
        </span>
      </td>
    )
    let objCls = `objectBox objectBox-${isPrimitive ? 'string' : isArr ? 'array' : 'object'}`
    let cellCls = `treeValueCell ${isPrimitive ? 'string' : isArr ? 'array' : 'object'}Cell`
    let objChld = (
      <span className={cellCls}>
        {isPrimitive ? val : isArr ? '[...]' : '{...}'}
      </span>
    )

    let value = (
      <td className={objCls}>
        <span>
          {(isPrimitive || isCollapsed) ? objChld : ''}
        </span>
      </td>
    )
    return (
      <Fragment>
        {label}
        {value}
      </Fragment>
    )
  }

  const getTableRows = (data, pKey, hasKeys) => {

    let trs = hasKeys && Object.keys(data).map(k => {
      let v = data[k]
      const type = {} = getType(v)
      const {
        isNull = false,
        isUndef = false,
        isObj = false,
        isArr = false,
        isStrNum = false
      } = type;

      let isPrimitive = isStrNum || isNull || isUndef;
      let isCollapsed = false

      let tds = getTableDatas(k, v, isCollapsed, type)

      let keyId = k.replace(/\\/g, "\\\\"); // every \ -> \\
      keyId = keyId.replace(/\//g, "\\/");  // every / -> \/

      let id = `${pKey === '/' ? '' : pKey}/${keyId}`

      currState[id] = true;

      let rowCls = `${isStrNum ? 'string' : isArr ? 'array' : 'object'}Row`
      let childCls = `${v ? (isObj || isArr) ? 'hasChildren' : '' : ''}`
      let collapsedCls = `${isCollapsed ? 'collapsed' : 'expanded'}`

      let cls = `treeRow ${rowCls} ${childCls} ${collapsedCls}`

      let tr = (
        <tr id={id} key={id} className={cls}>
          {tds}
        </tr>
      )
      let trChild = v ? getTableRows(v, id, !isPrimitive) : ''
      return (
        <Fragment>
          {tr}
          {trChild}
        </Fragment>
      )

    })

    return trs
  }

  let formated = ``

  let tableRows = getTableRows(data, '/', true)

  formated = tableRows

  let main = (
    <div id='table_wrapper'>
      <table id='main_table'>
        <thead></thead>
        <tbody>
          {formated}
        </tbody>
      </table>
    </div>
  )

  return main
}

export default Formator