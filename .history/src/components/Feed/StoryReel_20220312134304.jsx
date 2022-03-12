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
      <Story
        img="https://gumlet.assettype.com/evoindia/2021-03/7a8d33ce-0cb5-45e5-b3e1-40c14a743a44/EC7BFBD6_ACFA_45CA_853C_AB15DD371D75_1_105_c.jpeg?w=1200&h=750&auto=format%2Ccompress&fit=max"
        profileSrc="https://scontent.fdel27-1.fna.fbcdn.net/v/t39.30808-6/275289941_1899112306942167_553029256324869489_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_ohc=0o5SRbTTaJYAX9n7ySw&_nc_ht=scontent.fdel27-1.fna&oh=00_AT_xl4NoiVPU7O-lJVaI-7KkgpH6vMKyBfGa8ZcIXr0oJQ&oe=62319EF7"
        title="Aryan Singh"
      />
      <Story
        img="https://assets.vogue.in/photos/5ce431b2f55c27562ea27f1a/master/pass/featured.2.jpg"
        profileSrc="https://scontent.fdel27-2.fna.fbcdn.net/v/t39.30808-1/273126839_106375361962432_4201724213271221446_n.jpg?stp=dst-jpg_p200x200&_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=m1MnRwAso3AAX8Nm2vw&_nc_ht=scontent.fdel27-2.fna&oh=00_AT87y6Fguz2e2X51zPjMh4YJQBTVKFFIC9CQnJxsTn1IqA&oe=62319393"
        title="Mudit Mamgain"
      />
      <Story
      img=""
      profileSrc=""
      title="Sparsh Nandrajog" 
      />
    </div>
  );
};

export default StoryReel;
