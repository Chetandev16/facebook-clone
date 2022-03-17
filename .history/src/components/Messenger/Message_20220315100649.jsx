import { Card, Typography } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Message.css";

const Message = forwardRef(({ key, username, message }, ref) => {

  console.log('====================================');
  console.log(key);
  console.log('====================================');
  const display = message.username.split(" ").shift();
  const isUser = username === message.username;
  return (
    <div ref={ref} className={`message__card ${isUser && "message__user"}`}>
      <Card className={isUser ? "message_usercard" : "message__guestcard"}>
        <Typography color="white" variant="h5" component="h2">
          {!isUser&&`${display || 'Unknown User'}:  `}{message.message}
        </Typography>
      </Card>
    </div>
  );
});

export default Message;
