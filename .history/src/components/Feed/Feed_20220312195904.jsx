import React from "react";
import "./feed.css";
import StoryReel from "./StoryReel";
import AddPost from "./AddPost";
import Post from "./Post";
import { useStatevalue } from "../StateProvider";
import db from "../../fire"
const Feed = () => {
  const[{user}, dispatch] = useStatevalue();
  return (
    <div className="feed">
      <StoryReel />
      <AddPost />
      <Post
        profilePic={user.photoURL}
        img="https://livecodestream.dev/post/top-productivity-tools-for-react-developers/featured.jpg"
        username={user.displayName}
        message="hello this is facebook clone"
        timestamp="12-03-2022"
      />
  
    </div>
  );
};

export default Feed;
