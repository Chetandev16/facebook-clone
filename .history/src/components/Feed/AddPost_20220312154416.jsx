import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import { PhotoLibrary } from "@material-ui/icons";
import { InsertEmoticon } from "@material-ui/icons";
import "./addpost.css";
const AddPost = () => {
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //database


    console.log(input + " " + imageUrl);

    setImageUrl("");
    setInput("");
  };

  return (
    <div className="addpost">
      <div className="addpost__top">
        <Avatar src="https://avatars.githubusercontent.com/u/70676486?v=4" />
        <form>
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="addpost__input"
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
      <div className="addpost__bottom">
        <div className="addpost__option">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="addpost__option">
          <PhotoLibrary style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="addpost__option">
          <InsertEmoticon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
