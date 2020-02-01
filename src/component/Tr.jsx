import React, { Fragment } from 'react'
import TdVal from './TdVal'
import TdKey from './TdKey';

const Tr = ({
  isExpanded,
  onToggle,
  type,
  level,
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

  let label = <TdKey isPrimitive={isPrimitive} isExpanded={isExpanded} k={k} onToggle={onToggle} level={level} />
  let value = <TdVal isPrimitive={isPrimitive} isExpanded={isExpanded} type={type} v={v} />

  let tds = <Fragment>
    {label}
    {value}
  </Fragment>

  let rowCls = `${isStrNum ? 'string' : isArr ? 'array' : 'object'}Row`
  let childCls = `${v ? (isObj || isArr) ? 'hasChildren' : '' : ''}`
  let collapsedCls = `${isExpanded ? 'collapsed' : 'expanded'}`

  let cls = `treeRow ${rowCls} ${childCls} ${collapsedCls}`

  let trs1 = {
    color: 'rgb(0, 116, 232)'
  }

  let tr = (
    <tr id={id} className={cls} data-level={level} style={trs1}>
      {tds}
    </tr>
  )
  return tr
}

export default Tr;