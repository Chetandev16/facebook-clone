import React from "react";
import "./header.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png"
          alt="facebook"
        /> 
      </div>
      <div className="header__middle"></div>

      <div className="header__right"></div>
    </div>
  );
};

export default Header;
