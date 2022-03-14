import { Card, Typography } from "@material-ui/core";
import React from "react";
// username1.split(' ').shift()
const Message = ({username1,username,text}) => {
  return (
    <div>
    <Card>
        <Typography
        color="white"
        variant="h5"
        component="h2"
        >
        {username}:{text}
        </Typography>
    </Card>
  
    </div>
  );
};

export default Message;
