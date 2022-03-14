import React from "react";

const Message = ({user,text}) => {
  return (
    <div>
      <h2>{user}{text}</h2>
    </div>
  );
};

export default Message;
