import { Card, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css";
// username1.split(' ').shift()
const Message = ({ username, message }) => {
  console.log(username);
  const isUser = username === message.username;
  return (
    <Card className={`message__card ${isUser && "message__user"}`}>
      <Typography color="white" variant="h5" component="h2">
        {message.username}:{message.message}
      </Typography>
    </Card>
  );
};

export default Message;