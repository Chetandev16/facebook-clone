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
        img="https://cdn.pocket-lint.com/r/s/970x/assets/images/153850-smartwatches-review-hands-on-apple-watch-series-6-initial-review-time-flies-image1-igwjjqsblg.jpg"
        profileSrc="https://scontent.fdel27-5.fna.fbcdn.net/v/t39.30808-6/274165796_2098716576971387_7534674283744861108_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=seU0Dj-KgS4AX_veEYM&_nc_ht=scontent.fdel27-5.fna&oh=00_AT-YxGiVXBvh76whMPBH17nvv2aYX9-SPQRf5KV3PL43wQ&oe=62316DD5"
        title="Soumil Taneja"
      />
      <Story img="" profileSrc="" title="" />
      <Story img="" profileSrc="" title="" />
    </div>
  );
};

export default StoryReel;
