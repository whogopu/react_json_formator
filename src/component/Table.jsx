import React, { Fragment } from 'react'
import { getType } from '../utils'
import Tr from './Tr'

const Table = ({ data }) => {

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

      let keyId = k.replace(/\\/g, "\\\\"); // every \ -> \\
      keyId = keyId.replace(/\//g, "\\/");  // every / -> \/
    
      let id = `${pKey === '/' ? '' : pKey}/${keyId}`
     
      let tr = <Tr isCollapsed={isCollapsed} type={type} id={id} k={k} v={v}/>
      let trChild = v ? getTableRows(v, id, !isPrimitive) : ''
      return (
        <Fragment key={id}>
          {tr}
          {trChild}
        </Fragment>
      )

    })

    return trs
  }

  let formated = getTableRows(data, '/', true)

  let table = (
    <table id='main_table'>
      <thead></thead>
      <tbody>
        {formated}
      </tbody>
    </table>
  )
  return table
}

export default Table;