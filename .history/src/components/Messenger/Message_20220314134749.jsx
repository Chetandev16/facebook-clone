import { Card, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(({ key, username, message }, ref) => {
  const display = message.username.split(" ").shift();
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message__card ${isUser && "message__user"}`}>
      <Card className={isUser ? "message_usercard" : "message__guestcard"}>
        <Typography color="white" variant="h5" component="h2">
          {!isUser&&`${message.username || 'Unknown User'}:  `}{message.message}
        </Typography>
      </Card>
    </div>
  );
});

export default Message;
