import React from "react";
import Story from "./Story";
import "./StoryReel.css";
import pic from "../../img/soumil.heic"
const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        img="https://cdn.dribbble.com/users/1068771/screenshots/14225432/media/0da8c461ba3920a8c827d864a6e051ed.jpg?compress=1&resize=400x300"
        profileSrc="https://avatars.githubusercontent.com/u/70676486?v=4"
        title="Chetan Pathak"
      />
      <Story
        img=""
        profileSrc={pic}
        title="Soumil Taneja"
      />
      <Story img="" profileSrc="" title="" />
      <Story img="" profileSrc="" title="" />
    </div>
  );
};

export default StoryReel;
