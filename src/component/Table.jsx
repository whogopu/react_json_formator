import React, { Fragment, useState } from 'react'
import { getType } from '../utils'
import Tr from './Tr'
import './style.css'

const Table = ({ data }) => {

  const [currState, setCurrState] = useState({})

  const onToggle = id => {
    setCurrState(state => ({
      ...state,
      [id]: !Boolean(state[id])
    }))
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

      let keyId = k.replace(/\\/g, "\\\\"); // every \ -> \\
      keyId = keyId.replace(/\//g, "\\/");  // every / -> \/
    
      let id = `${pKey === '/' ? '' : pKey}/${keyId}`
     
      let isExpanded = Boolean(currState[id] || false)

      let tr = <Tr isExpanded={isExpanded} type={type} id={id} k={k} v={v} onToggle={() => onToggle(id)}/>
      let trChild = v && isExpanded ? getTableRows(v, id, !isPrimitive) : null
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