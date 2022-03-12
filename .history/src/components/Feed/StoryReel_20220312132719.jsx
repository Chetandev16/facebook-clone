import React from 'react'
import Story from './Story'
import "./StoryReel.css"
const StoryReel = () => {
  return (
    <div className="storyReel">
        <Story 
        img=""
        profileSrc="https://avatars.githubusercontent.com/u/70676486?v=4"
        title="Chetan Pathak"
        />
        <Story/>
        <Story/>
        <Story/>
        <Story/>
    </div>
  )
}

export default StoryReel