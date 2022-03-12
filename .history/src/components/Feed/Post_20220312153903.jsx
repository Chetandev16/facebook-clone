import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import { PhotoLibrary } from "@material-ui/icons";
import { InsertEmoticon } from "@material-ui/icons";
import "./post.css";
const Post = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="post">
      <div className="post__top">
        <Avatar src="https://avatars.githubusercontent.com/u/70676486?v=4" />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="post__input"
            type="text"
            placeholder={`What's on your mind. Chetan Pathak?`}
          />
          <input
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
            type="text"
            placeholder="Image Url(optional)"
          />
          <button type="submit" onClick={handleSubmit}></button>
        </form>
      </div>
      <div className="post__bottom">
        <div className="post__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="post__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="post__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default Post;
