import React from "react";

const Message = ({messages}) => {
  return (
    <div>
      {messages.map((message) => (
        <p>{message}</p>
      ))}
    </div>
  );
};

export default Message;
