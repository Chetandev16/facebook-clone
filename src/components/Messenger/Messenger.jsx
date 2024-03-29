import db from "../../fire";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import FlipMove from "react-flip-move";
import mlogo from "./img/mlogo.png";
import SendIcon from "@material-ui/icons/Send";
import {
  Avatar,
  DeleteIcon,
  Button,
  FormControl,
  IconButton,
  Input,
  InputLabel,
} from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { useStatevalue } from "../StateProvider";
import Message from "./Message";

const Messenger = ({ handleChange }) => {
  const [input, setInput] = useState("");
  const [{ user }, dispatch] = useStatevalue();
  const [messages, setMessages] = useState([]); // username : user.displayName
  // const [username, setUsername] = useState("");

  // useEffect(() => {
  //   setUsername(user.displayName));
  // }, []);

  useEffect(() => {
    db.collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setMessages(
          snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() }))
        );
      });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: user.displayName,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  //  user.displayName.split(" ").shift()
  return (
    <>
      <div className="messenger__header">
        <Avatar src={user.photoURL} style={{ margin: "10px 10px" }} />
        <div className="messenger__header__img" onClick={handleChange}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png"
            alt="facebook"
            height="40"
            width="40"
            style={{ marginTop: "10px" }}
          />
        </div>
      </div>

      <div className="messenger__app">
        <img src={mlogo} height="100" width="100" />
        <h1>Facebook Messenger GC</h1>
        <h2>Welcome👋 {user.displayName.split(" ").shift()}</h2>
        <form className="messenger__form">
          <div className="test">
            <FormControl className="messenger__formcontrol">
              <Input className="messenger__input"
                placeholder="Enter a message ..."
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                }}
              />
              <IconButton
                className="messenger__iconbutton"
                // style={{ fontSize: "10px" }}
                variant="contained"
                disabled={!input}
                color="primary"
                type="submit"
                onClick={sendMessage}
              >
                <SendIcon />
              </IconButton>
            </FormControl>
          </div>
        </form>
        <FlipMove>
          {messages.map(({ id, message }) => (
            <Message key={id} username={user.displayName} message={message} />
          ))}
        </FlipMove>
      </div>
    </>
  );
};

export default Messenger;
