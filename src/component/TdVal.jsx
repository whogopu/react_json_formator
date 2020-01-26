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

  let objCls = `objectBox objectBox-${isPrimitive ? 'string' : isArr ? 'array' : 'object'}`
  let cellCls = `treeValueCell ${isPrimitive ? 'string' : isArr ? 'array' : 'object'}Cell`
  let objChld = (
    <span className={cellCls}>
      {isPrimitive ? isNull ? 'null' : v : isArr ? '[...]' : '{...}'}
    </span>
  )

  let tdVal = (
    <td className={objCls}>
      <span>
        {(isPrimitive || !isExpanded) ? objChld : ''}
      </span>
    </td>
  )
  return tdVal
}

export default TdVal;