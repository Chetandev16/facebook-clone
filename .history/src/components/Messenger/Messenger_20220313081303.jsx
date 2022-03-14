import React, { useState } from "react";
// <button onClick={handleChange}>change</button>
const Messenger = ({ handleChange }) => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  //   console.log(input);

  const sendMessage = () => {
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
        <button onClick={sendMessage}>send message</button>
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
