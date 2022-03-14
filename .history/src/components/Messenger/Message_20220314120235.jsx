import { Card, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";
// username1.split(' ').shift()
const Message = forwardRef(({ username, message }, ref) => {
  console.log(username);
  console.log(message);
  const isUser = username === message.username;
  return (
    <div className={`message__card ${isUser && "message__user"}`}>
      <Card className={isUser ? "message_usercard" : "message__guestcard"}>
        <Typography color="white" variant="h5" component="h2">
          {message.username}:{message.message}
        </Typography>
      </Card>
    </div>
  );
});

export default Message;
