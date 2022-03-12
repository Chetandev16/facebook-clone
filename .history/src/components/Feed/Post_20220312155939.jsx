import React from 'react'
import "./post.css"
import { Avatar } from '@material-ui/core'
const Post = ({profilePic, img, username, timestamp, message}) => {
  return (
    <div className="pod">
        <div className="post__top">
            <Avatar src={profilePic} className="post__avatar"/>
            <div className="post__topingo">
                <h3>{username}</h3>
                <p>Timestamp...</p>
            </div>
        </div>
    </div>
  )
}

export default Post