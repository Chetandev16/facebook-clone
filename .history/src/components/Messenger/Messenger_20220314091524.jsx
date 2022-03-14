import { Avatar, Button, FormControl, Input, InputLabel } from "@material-ui/core";
import React, { useState } from "react";
import { useStatevalue } from "../StateProvider";
// <button onClick={handleChange}>change</button>
const Messenger = ({ handleChange }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [{user}, dispatch] = useStatevalue();
  //   console.log(input);

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
          <Input />
        </FormControl>

        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
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
      </form>
      {messages.map((message) => (
        <p>{message}</p>
      ))}

      <div>
        <button onClick={handleChange}>change</button>
      </div>
    </div>
  );
};

export default Messenger;
