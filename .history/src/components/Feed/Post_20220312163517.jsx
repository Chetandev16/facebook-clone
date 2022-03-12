import React from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
const Post = ({ profilePic, img, username, timestamp, message }) => {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>Timestamp...</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__img">
        <img src={img} alt={username} />
      </div>

      <div className="post__options">
        <div className="post__option">
          
        </div>
      </div>
    </div>
  );
};

export default Post;
