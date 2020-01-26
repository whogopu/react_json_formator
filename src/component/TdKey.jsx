import React from 'react'

const TdKey = ({
  isPrimitive,
  isExpanded,
  onToggle,
  k
}) => {
  let tdKey = (
    <td className="treeLabelCell" onClick={onToggle}>
      <span className="treeIcon">{!isPrimitive ? isExpanded ? '-' : '+' : ''}</span>
      <span className="treeLabel stringLabel">
        {k}
      </span>
    </td>
  )
  return tdKey
}

export default TdKey;