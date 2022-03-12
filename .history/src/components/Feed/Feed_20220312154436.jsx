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
      <Post/>
    </div>
  )
}

export default Feed