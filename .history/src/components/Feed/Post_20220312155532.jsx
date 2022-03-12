import React from 'react'
import "./post.css"
import { Avatar } from '@material-ui/core'
const Post = ({profilePic, img, username, timestamp, message}) => {
  return (
    <div className="pod">
        <div className="post__top">
            <Avatar src={proficePic}/>
        </div>
    </div>
  )
}

export default Post