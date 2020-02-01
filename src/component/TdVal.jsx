import React from 'react'

const TdVal = ({
  isPrimitive,
  isExpanded,
  type,
  v
}) => {

  const {
    isNull = false,
    isUndef = false,
    isArr = false,
    isStrNum = false,
    isObj = false
  } = {} = type;

  let mainStyle = {
    color: 'rgb(0, 116, 232)',
    direction: 'ltr',
    fontSize: '11px',
    lineHeight: '16px',
    overflow: 'hidden',
    paddingTop: '2px',
    paddingRight: 0,
    paddingBottom: '2px',
    paddingLeft: '4px',
    verticalAlign: 'top',
    whiteSpace: 'nowrap'
  }

  let treeValStyle = {
    color: 'rgb(0, 116, 232)',
    direction: 'ltr',
    fontSize: '11px',
    lineHeight: '16px',
    unicodeBidi: 'plaintext',
    whiteSpace: 'nowrap',
  }

  let objCls = `objectBox objectBox-${isPrimitive ? 'string' : isArr ? 'array' : 'object'}`
  let cellCls = `treeValueCell ${isPrimitive ? 'string' : isArr ? 'array' : 'object'}Cell`
  let objChld = (
    <span className={cellCls} style={treeValStyle}>
      {isPrimitive ? isNull ? 'null' : v : isArr ? '[...]' : '{...}'}
    </span>
  )

  let tdVal = (
    <td className={objCls} style={mainStyle}>
      <span>
        {(isPrimitive || !isExpanded) ? objChld : ''}
      </span>
    </td>
  )
  return tdVal
}

export default TdVal;