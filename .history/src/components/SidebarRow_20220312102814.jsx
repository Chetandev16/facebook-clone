import React from 'react'
import "./sidebarrow.css"
const SidebarRow = (props) => {
  return (
    <div className="sidebarrow">
        <p>{props.title}</p>
    </div>
  )
}

export default SidebarRow