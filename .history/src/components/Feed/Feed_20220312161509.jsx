import React from "react";
import "./feed.css";
import StoryReel from "./StoryReel";
import AddPost from "./AddPost";
import Post from "./Post";
const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <AddPost />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/70676486?v=4"
        img="https://livecodestream.dev/post/top-productivity-tools-for-react-developers/featured.jpg"
        username="Chetan pathak"
        message="hello this is facebook clone"
        timestamp="12-03-2022"
      />
      <Post
        profilePic="https://avatars.githubusercontent.com/u/70676486?v=4"
        img="https://cdn.motor1.com/images/mgl/8e8Mo/s1/most-expensive-new-cars-ever.webp"
        username="chetan pathak"
        message="this is cars"
      />
    </div>
  );
};

export default Feed;
