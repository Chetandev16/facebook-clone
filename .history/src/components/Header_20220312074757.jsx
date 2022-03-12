import React from "react";
import "./header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from "@material-ui/icons/Home"


const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png"
          alt="facebook"
        />
        <div className="header__input">
          <SearchIcon/>
          <input type="text"/>
        </div>
      </div>
      <div className="header__middle">
        <div className="header__optiojn">
        <HomeIcon fontsize="large"/>
        </div>
      </div>

      <div className="header__right"></div>
    </div>
  );
};

export default Header;
