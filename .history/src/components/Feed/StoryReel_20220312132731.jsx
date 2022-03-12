import React from "react";
import Story from "./Story";
import "./StoryReel.css";
const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        img="data:image/png;base64,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"
        profileSrc="https://avatars.githubusercontent.com/u/70676486?v=4"
        title="Chetan Pathak"
      />
      <Story />
      <Story />
      <Story />
      <Story />
    </div>
  );
};

export default StoryReel;
