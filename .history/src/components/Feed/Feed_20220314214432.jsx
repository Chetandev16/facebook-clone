import React, { useEffect, useState } from "react";
import "./feed.css";
import StoryReel from "./StoryReel";
import AddPost from "./AddPost";
import Post from "./Post";
import { useStatevalue } from "../StateProvider";
import db from "../../fire";
import FlipMove from "react-flip-move";
const Feed = () => {
  const [post, setPost] = useState([]);
  const [{ user }, dispatch] = useStatevalue();

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPost(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  }, []);
  console.log(post.id);
  return (
    <div className="feed">
      <StoryReel />
      <AddPost />
      <FlipMove>
        {post.map((post) => (
          <Post
            key={post.data.id}
            profilePic={post.data.profilePic}
            message={post.data.message}
            timestamp={post.data.timestamp}
            username={post.data.username}
            image={post.data.image}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
