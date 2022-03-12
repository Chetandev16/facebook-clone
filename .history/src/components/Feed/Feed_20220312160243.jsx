import React from 'react'
import "./feed.css"
import StoryReel from './StoryReel'
import AddPost from "./AddPost"
import Post from './Post'
const Feed = () => {
  return (
    <div className="feed">
      <StoryReel/>
      <AddPost/>
      <Post profilePic="https://avatars.githubusercontent.com/u/70676486?v=4"
       img="https://livecodestream.dev/post/top-productivity-tools-for-react-developers/featured.jpg"
      />
      <Post/>
      <Post/>
    </div>
  )
}

export default Feed