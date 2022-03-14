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
  const [messages, setMessages] = useState([
    { username: "chetan", text: "hi this is chetan" },
    { username: "soumil", text: "hi this is soumil" },
  ]); // username : user.displayName
  const [username, setUsername] = useState("");

  useEffect(() => {
    setUsername(prompt("eneter your name!"));
  }, []);

  const sendMessage = (e) => {
    e.preventDefault();

    setMessages([...messages, { username: username, text: input }]);
    setInput("");
  };
  //  user.displayName.split(" ").shift()
  return (
    <div className="messanger__app">
      <Avatar src={user.photoURL} />
      <h1>Messenger</h1>
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
        <Message message={message} />
      ))}

      <div>
        <button onClick={handleChange}>change</button>
      </div>
    </div>
  );
};

export default Messenger;
