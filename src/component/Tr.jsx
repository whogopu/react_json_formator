import React, { Fragment } from 'react'
import TdVal from './TdVal'
import TdKey from './TdKey';

const Tr = ({
  isExpanded,
  onToggle,
  type,
  id,
  k,
  v
}) => {

  const {
    isNull = false,
    isUndef = false,
    isArr = false,
    isStrNum = false,
    isObj = false
  } = {} = type;

  let isPrimitive = isStrNum || isNull || isUndef;

  let label = <TdKey isPrimitive={isPrimitive} isExpanded={isExpanded} k={k} onToggle={onToggle} />
  let value = <TdVal isPrimitive={isPrimitive} isExpanded={isExpanded} type={type} v={v} />

  let tds = <Fragment>
    {label}
    {value}
  </Fragment>

  let rowCls = `${isStrNum ? 'string' : isArr ? 'array' : 'object'}Row`
  let childCls = `${v ? (isObj || isArr) ? 'hasChildren' : '' : ''}`
  let collapsedCls = `${isExpanded ? 'collapsed' : 'expanded'}`

  let cls = `treeRow ${rowCls} ${childCls} ${collapsedCls}`

  let tr = (
    <tr id={id} className={cls}>
      {tds}
    </tr>
  )
  return tr
}

export default Tr;