import db from "../../fire";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import FlipMove from "react-flip-move"
import {
  Avatar,
  Button,
  FormControl,
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
    db.collection("messages").orderBy('timestamp','desc').onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("messages").add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp() ,
    });
    setInput("");
  };
  //  user.displayName.split(" ").shift()
  return (
    <div className="messanger__app">
      <Avatar src={user.photoURL} />
      <h1>Messenger GC</h1>
      <h2>Welcome {username}</h2>
      <form>
        <FormControl>
          <InputLabel>Enter a message ...</InputLabel>
          <Input
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <Button
            // style={{ fontSize: "10px" }}
            variant="contained"
            disabled={!input}
            color="primary"
            type="submit"
            onClick={sendMessage}
          >
            send message
          </Button>
        </FormControl>
      </form>
      {messages.map((message) => (
        <Message username={username} message={message} />
      ))}

      <div>
        <button onClick={handleChange}>change</button>
      </div>
    </div>
  );
};

export default Messenger;
