import { Button } from "@material-ui/core";
import React, { useState } from "react";
// <button onClick={handleChange}>change</button>
const Messenger = ({ handleChange }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  //   console.log(input);

  const sendMessage = (e) => {
    e.preventDefault();

    setMessages([...messages, input]);
    setInput("");
  };

  return (
    <div className="app">
      <h1>Messenger</h1>
      <form>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <br />
        <Button
          style={{ fontSize: "10px" }}
          variant="outlined"
          // color="primary"
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
