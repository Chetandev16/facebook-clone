import { Card, Typography } from "@material-ui/core";
import React from "react";
import "./message.css"
// username1.split(' ').shift()
const Message = ({ username1, username, text }) => {
  return (
    <Card className="message__card">
      <Typography color="white" variant="h5" component="h2">
        {username}:{text}
      </Typography>
    </Card>
  );
};

export default Message;
