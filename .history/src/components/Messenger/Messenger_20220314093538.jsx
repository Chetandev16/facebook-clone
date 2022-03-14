import {
  Avatar,
  Button,
  FormControl,
  Input,
  InputLabel,
} from "@material-ui/core";
import React, { useState } from "react";
import { useStatevalue } from "../StateProvider";
import Message from "./Message";

const Messenger = ({ handleChange }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStatevalue();
  const [username, setUsername] = useState("");



  useEffect(() => {
    setUsername(prompt("eneter your name!"));
  }, []);


  const sendMessage = (e) => {
    e.preventDefault();

    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="app">
      <Avatar src={user.photoURL} />
      <h1>Messenger</h1>
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
        <Message username={username} text={message} />
      ))}

      <div>
        <button onClick={handleChange}>change</button>
      </div>
    </div>
  );
};

export default Messenger;
