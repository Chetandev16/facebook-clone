import React, { forwardRef } from "react";
import "./post.css";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { Avatar, IconButton } from "@material-ui/core";
import {
  ThumbUp,
  ChatBubbleOutline,
  NearMe,
  AccountCircle,
  ExpandMore,
} from "@material-ui/icons";
import { useStatevalue } from "../StateProvider";
import { Delete } from "@material-ui/icons";

import swal from "sweetalert";
import db from "../../fire";
const Post = forwardRef(
  ({ key, profilePic, image, username, timestamp, message }, ref) => {
    // var date = new Date(timestamp);
    // date.toString();
    // {new Date(timestamp?.toDate()).toUTCString()}
    const [{ user }, dispatch] = useStatevalue();
    // console.log(timestamp.toDate().toDateString());
    const firebaseDelete = () => {
      firebase
        .firestore()
        .collection("posts")
        .where("message", "==", message)
        .get()
        .then((querySnapshot) => {
          querySnapshot.docs[0].ref.delete();
          swal("Done!", "Post Deleted Successfully!!", "success");
        })
        .catch((e) => {
          swal("Failed!", "Post Deletion failed!!", "error");
        });
    };

    // db.collection('posts').doc(key).delete()
    //   .then(swal("Done!", "Post Deleted Successfully!!", "success")).catch((e)=>{
    //     console.log('====================================');
    //     console.log(e.message);
    //     console.log('====================================');
    //   })
    // console.log(user.displayName);
    const deleteuser = username == user.displayName;
    return (
      <div ref={ref} className="post">
        <div className="post__top">
          <div className="post__left">
            <Avatar src={profilePic} className="post__avatar" />
            <div className="post__topInfo">
              <h3>{username}</h3>
              <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
            </div>
          </div>
          <div className="post__right">
            <IconButton
              className={deleteuser ? "delete__show" : "delete__hide"}
              disabled={!deleteuser}
              onClick={firebaseDelete}
            >
              <Delete />
            </IconButton>
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
            <ThumbUp />
            <p>Like</p>
          </div>
          <div className="post__option">
            <ChatBubbleOutline />
            <p>Comment</p>
          </div>
          <div className="post__option">
            <NearMe />
            <p>Share</p>
          </div>
          <div className="post__option">
            <AccountCircle />
            <ExpandMore />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
