import React from "react";
import "./sidebar.css";
import { ExpandMoreOutlined, LocalHospital } from "@material-ui/icons";
import PeopleIcon from "@material-ui/icons/People";
import EmojiFlagsIcon from "@material-ui/icons/EmojiFlags";
import ChatIcon from "@material-ui/icons/Chat";
import StorefrontIcon from "@material-ui/icons/Storefront";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";

import SidebarRow from "./SidebarRow";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow src='' title='Chetan Pathak' />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <Sidebar Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow title="Messenger" Icon={ChatIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <Sidebar Icon={ExpandMoreOutlined} title="Marketplace" />
    </div>
  );
};

export default Sidebar;
