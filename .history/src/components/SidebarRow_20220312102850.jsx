import React from 'react'
import "./sidebarrow.css"
const SidebarRow = ({src, icon, title}) => {
  return (
    <div className="sidebarrow">
        <p>{title}</p>
    </div>
  )
}

export default SidebarRow