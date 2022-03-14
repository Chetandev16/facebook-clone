import React from "react";

const Message = ({username1,username,text}) => {
  return (
    <div>
      <h2>{username1.split(' ').shift()}:{text}</h2>
    </div>
  );
};

export default Message;
