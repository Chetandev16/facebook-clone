import React from 'react'
import { Avatar } from '@material-ui/core'
import "./post.css"
const Post = () => {
  return (
    <div className="post">
        <div className="post__top">
            <Avatar src="https://avatars.githubusercontent.com/u/70676486?v=4"/>
            <form>
                <input type="text" placeholder={`What's on your mind. Chetan Pathak?`}/>
                <input type="text" placeholder='Image Url(optional)'/>
            </form>
        </div>
        <div className="post__bottom">

        </div>
    </div>
  )
}

export default Post