import React from 'react'

const TdKey = ({
  isPrimitive,
  isCollapsed,
  k
}) => {
  let tdKey = (
    <td className="treeLabelCell">
      <span className="treeIcon">{!isPrimitive ? isCollapsed ? '+' : '-' : ''}</span>
      <span className="treeLabel stringLabel">
        {k}
      </span>
    </td>
  )
  return tdKey
}

export default TdKey;