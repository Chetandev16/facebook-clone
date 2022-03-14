import db from "../../fire";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import FlipMove from "react-flip-move";
import mlogo from "./img/mlogo.png";
import SendIcon from "@material-ui/icons/Send";
import {
  Avatar,
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
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("enter your name!"));
  }, []);

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
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  //  user.displayName.split(" ").shift()
  return (
    <div className="messanger__app">
      <Avatar src={user.photoURL} style={{ margin: "10px 10px" }} />
      <img src={mlogo} height="100" width="100" />
      <h1>Facebook Messenger GC</h1>
      <h2>Welcome {username}</h2>
      <form className="messenger__form">
        <FormControl>
          <InputLabel>Enter a message ...</InputLabel>
          <Input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
           <IconButton
            // style={{ fontSize: "10px" }}
            variant="contained"
            disabled={!input}
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            <SendIcon/>
          </IconButton> 


        </FormControl>
      </form>
      <FlipMove>
        {messages.map(({ id, message }) => (
          <Message key={id} username={username} message={message} />
        ))}
      </FlipMove>
      <div>
        <button onClick={handleChange}>change</button>
      </div>
    </div>
  );
};

export default Messenger;
