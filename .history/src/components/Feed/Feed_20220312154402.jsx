import React from 'react'
import "./feed.css"
import StoryReel from './StoryReel'
import AddPost from "./AddPost"
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