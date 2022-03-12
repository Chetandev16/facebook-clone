import { Avatar } from '@material-ui/core'
import React from 'react'
import "./sidebarrow.css"
const SidebarRow = ({src, Icon, title}) => {
  return (
    <div className="sidebarrow">
        <Avatar src={src}/>}
         <Icon/>
        <h4>{title}</h4>
    </div>
  )
}

export default SidebarRow