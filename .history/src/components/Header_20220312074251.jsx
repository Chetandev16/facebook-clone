import React from "react";
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png"
          alt="facebook"
        /> 
        <SearchIcon/>
      </div>
      <div className="header__middle"></div>

      <div className="header__right"></div>
    </div>
  );
};

export default Header;