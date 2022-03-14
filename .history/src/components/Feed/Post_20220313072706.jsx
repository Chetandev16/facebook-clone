import React from "react";
import "./post.css";
import { Avatar } from "@material-ui/core";
import { ThumbUp,ChatBubbleOutline,NearMe, AccountCircle, ExpandMore } from "@material-ui/icons";

const Post = ({ profilePic, image, username, timestamp, message }) => {
  // var date = new Date(timestamp);
  // date.toString();
  // {new Date(timestamp?.toDate()).toUTCString()}

  
  
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__img">
        <img src={image} alt="" />
      </div>

      <div className="post__options">
        <div className="post__option">
          <ThumbUp/>
          <p>Like</p>
        </div>
        <div className="post__option">
          <ChatBubbleOutline/>
          <p>Comment</p>
        </div>
        <div className="post__option">
          <NearMe/>
          <p>Share</p>
        </div>
        <div className="post__option">
          <AccountCircle/>
          <ExpandMore/>
        </div>
      </div>
    </div>
  );
};

export default Post;
