import { Card, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css"
// username1.split(' ').shift()
const Message = ({username, message}) => {
    console.log(username);
//   const isUser = username === message.username;
const isUser = true;
  return (
    <Card className={`message__card ${isUser && 'message__user'}`} >
      <Typography color="white" variant="h5" component="h2">
        xys
      </Typography>
    </Card>
  );
};

export default Message;
