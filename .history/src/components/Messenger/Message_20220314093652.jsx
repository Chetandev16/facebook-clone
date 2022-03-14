import React from "react";

const Message = ({username1,username,text}) => {
  return (
    <div>
      <h2>{username1}:{text}</h2>
    </div>
  );
};

export default Message;
