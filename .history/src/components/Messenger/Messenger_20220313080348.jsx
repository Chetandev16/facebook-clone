import React, { useState } from "react";
// <button onClick={handleChange}>change</button>
const Messenger = ({ handleChange }) => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
//   console.log(input);

  const sendMessage =()=>{

  }
  return (
    <div className="app">
      <h1>Messenger</h1>
      <input
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <button onClick={sendMessage}>send message</button>
      {/* input field */}
      {/* button */}

      {/* messages */}

      <div>
        <button onClick={handleChange}>change</button>
      </div>
    </div>
  );
};

export default Messenger;
