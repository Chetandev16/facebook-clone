import React from "react";
import Story from "./Story";
import "./StoryReel.css";
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
        profileSrc="https://instagram.fdel27-5.fna.fbcdn.net/v/t51.2885-19/274258806_626636591941219_3810232592178039715_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.fdel27-5.fna.fbcdn.net&_nc_cat=107&_nc_ohc=LCJkvabq0_0AX_-DhxU&edm=ABfd0MgBAAAA&ccb=7-4&oh=00_AT9TCTWUmpTZdHUL544-TWbJ2J3Gwynizd-V3qewlGRSpA&oe=62337E31&_nc_sid=7bff83"
        title="Soumil Taneja"
      />
      <Story img="" profileSrc="" title="" />
      <Story img="" profileSrc="" title="" />
    </div>
  );
};

export default StoryReel;
