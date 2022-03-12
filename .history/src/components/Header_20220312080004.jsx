import React from "react";
import "./header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import FlagIcon from "@material-ui/icons/Flag";
import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlined";
import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlined";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from "@material-ui/icons/Forum";
import NotificationActiveIcon from "@material-ui/icons/NotificationsActive";
import ExpandMoreICon from "@material-ui/icons/ExpandMore";

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/150px-2021_Facebook_icon.svg.png"
          alt="facebook"
        />
        <div className="header__input">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>
      <div className="header__middle">
        <div className="header__optiojn">
          <HomeIcon fontSize="large" />
        </div>
        <div className="header__optiojn">
          <FlagIcon fontSize="large" />
        </div>
        <div className="header__optiojn">
          <SubscriptionsOutlinedIcon fontSize="large" />
        </div>
        <div className="header__optiojn">
          <StorefrontOutlinedIcon fontSize="large" />
        </div>
        <div className="header__optiojn">
          <SupervisedUserCircleIcon fontSize="large" />
        </div>
      </div>

      <div className="header__right">
        <div className="header__info">
          <Avatar src=""/> 
          <h4>Chetan Pathak</h4> 
        </div> 



        <IconButton>
          <AddIcon/>
        </IconButton> 

        <IconButton>
          <ForumIcon/>
        </IconButton> 

        <IconButton>
          <NotificationActiveIcon/>
        </IconButton> 

        <IconButton>
          <ExpandMoreICon/>
        </IconButton> 
      </div>
    </div>
  );
};

export default Header;
