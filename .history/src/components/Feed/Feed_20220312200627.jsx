import React, { useEffect, useState } from "react";
import "./feed.css";
import StoryReel from "./StoryReel";
import AddPost from "./AddPost";
import Post from "./Post";
import { useStatevalue } from "../StateProvider";
import db from "../../fire";
const Feed = () => {
  const [post, setPost] = useState([]);
  const [{ user }, dispatch] = useStatevalue();

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <AddPost />
      {post.map((post) =>(
          <Post
          key = {post.id}
          profilePic = {post.profilePic}
          />
        )
      )}
      {/* <Post
        profilePic={user.photoURL}
        img="https://livecodestream.dev/post/top-productivity-tools-for-react-developers/featured.jpg"
        username={user.displayName}
        message="hello this is facebook clone"
        timestamp="12-03-2022"
      /> */}
    </div>
  );
};

export default Feed;
