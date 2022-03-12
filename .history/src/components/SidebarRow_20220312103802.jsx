import { Avatar } from '@material-ui/core'
import React from 'react'
import "./sidebarrow.css"
const SidebarRow = ({src, Icon, title}) => {
  return (
    <div className="sidebarrow">
        {src && <Avatar src={src}/>}
        <p>{title}</p>
    </div>
  )
}

export default SidebarRow