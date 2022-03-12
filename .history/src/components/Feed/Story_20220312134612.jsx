import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Story.css"
const Story = ({img, profileSrc, title}) => {
  return (
    <div style={{backgroundImage: `url(${img})`}}  className="story">
       <Avatar src={profileSrc}/>
       <h4>{title}</h4>
    </div>
  )
}

export default Story