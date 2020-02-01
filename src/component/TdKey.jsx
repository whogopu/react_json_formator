import React from 'react'

const TdKey = ({
  isPrimitive,
  isExpanded,
  onToggle,
  level,
  k
}) => {

  let mainStyle = {
    color: 'rgb(0, 116, 232)',
    direction: 'ltr',
    fontSize: '11px',
    lineHeight: '16px',
    overflow: 'hidden',
    paddingTop: '2px',
    paddingRight: '17px',
    paddingBottom: '2px',
    verticalAlign: 'top',
    whiteSpace: 'nowrap'
  }

  let treeIconStyle = {
    boxSizing: 'content-box',
    color: 'rgb(0, 116, 232)',
    direction: 'ltr',
    display: 'inline-block',
    fontSize: '10px',
    height: '14px',
    lineHeight: '14px',
    marginInlineEnd: '1px',
    marginInlineStart: '3px',
    padding: '1px',
    verticalAlign: 'bottom',
    whiteSpace: 'nowrap',
    width: '14px'
  }

  let treeLabelStyle = {
    color: 'rgb(0, 116, 232)',
    direction: 'ltr',
    fontSize: '11px',
    lineHeight: '16px',
    unicodeBidi: 'plaintext',
    whiteSpace: 'nowrap',
  }

  let tdKey = (
    <td className="treeLabelCell" onClick={onToggle} style={{...mainStyle, paddingLeft: level * 16 }}>
      <span className="treeIcon" style={treeIconStyle}>{!isPrimitive ? isExpanded ? '-' : '+' : ''}</span>
      <span className="treeLabel stringLabel" style={treeLabelStyle}>
        {k}:
      </span>
    </td>
  )
  return tdKey
}

export default TdKey;