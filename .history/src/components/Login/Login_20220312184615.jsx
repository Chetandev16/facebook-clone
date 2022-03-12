import { Button } from "@material-ui/core";
import React from "react";
import {auth, provider} from "../../firebase"

import "./Login.css";
const Login = ({ setUser }) => {
  const signIn = () => {
    auth.signInWithPopup()
    
    // setUser(true);
  };
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png"
          alt=""
        />
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
          alt=""
        />
      </div>
      <Button variant="contained"  type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
};

export default Login;
