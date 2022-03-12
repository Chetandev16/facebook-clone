import React from 'react'
import "./feed.css"
import StoryReel from './StoryReel'
const Feed = () => {
  return (
    <div className="feed">
      <StoryReel/>
      <Post/>
    </div>
  )
}

export default Feed