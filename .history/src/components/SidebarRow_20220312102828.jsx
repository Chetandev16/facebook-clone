import React from 'react'
import "./sidebarrow.css"
const SidebarRow = ({title}) => {
  return (
    <div className="sidebarrow">
        <p>{title}</p>
    </div>
  )
}

export default SidebarRow