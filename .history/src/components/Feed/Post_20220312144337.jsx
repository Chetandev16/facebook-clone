import React from "react";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam"
import { PhotoLibrary } from "@material-ui/icons";
import { InsertEmoticon } from "@material-ui/icons";
import "./post.css";
const Post = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hello");
    
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src="https://avatars.githubusercontent.com/u/70676486?v=4" />
        <form>
          <input
            className="post__input"
            type="text"
            placeholder={`What's on your mind. Chetan Pathak?`}
          />
          <input type="text" placeholder="Image Url(optional)" />
          <button type="submit" onClick={handleSubmit}>
          </button>
        </form>
      </div>
      <div className="post__bottom">
          <div className="post__option">
              <VideocamIcon style={{color: "red"}} />
              <h3>Live Video</h3>
          </div>
          <div className="post__option">
              <VideocamIcon style={{color: "green"}} />
              <h3>Photo/Video</h3>
          </div>
          <div className="post__option">
              <VideocamIcon style={{color: "red"}} />
              <h3>Live Video</h3>
          </div>
      </div>
    </div>
  );
};

export default Post;
