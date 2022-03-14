import { Card, Typography } from "@material-ui/core";
import React from "react";
import "./Message.css"
// username1.split(' ').shift()
const Message = ({username, message}) => {
  return (
    <Card className="message__card">
      <Typography color="white" variant="h5" component="h2">
        {message.username}:{message.text}
      </Typography>
    </Card>
  );
};

export default Message;
