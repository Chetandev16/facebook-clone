import { Avatar } from '@material-ui/core'
import React from 'react'
import "./sidebarrow.css"
const SidebarRow = ({handleChange, src, Icon, title}) => {
  return (
    <div className="sidebarrow" onClick={handleChange}>
        {src && <Avatar src={src}/>}
        {Icon && <Icon/>}
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow