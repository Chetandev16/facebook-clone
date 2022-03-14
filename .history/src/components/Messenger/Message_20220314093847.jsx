import React from "react";
// username1.split(' ').shift()
const Message = ({username1,username,text}) => {
  return (
    <div>
      <h2>{}:{text}</h2>
    </div>
  );
};

export default Message;
