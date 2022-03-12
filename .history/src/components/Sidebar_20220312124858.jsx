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
      <SidebarRow
        // src="https://scontent.fdel27-4.fna.fbcdn.net/v/t1.6435-9/129030165_206744990979666_2096203665417632714_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=k8ILGZGGPgAAX-bLGSy&_nc_oc=AQnzF5LuBUSrzWb9QSueWEEafDM04BhKLQjmRQc6WG0-3FxcEJLNgM1IQ-TkloRzUB0&tn=gmt7-FGj1FzjU9yg&_nc_ht=scontent.fdel27-4.fna&oh=00_AT9IVzbCvft3fVKJaZM1zPtIY8xJ5-cECDLz1NhmpSbcpw&oe=625384C1"
        // title="Chetan Pathak"
      />
      {/* <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <Sidebar Icon={EmojiFlagsIcon} title="Pages" />
      <SidebarRow Icon={PeopleIcon} title="Friends" />
      <SidebarRow title="Messenger" Icon={ChatIcon} />
      <SidebarRow title="Marketplace" Icon={StorefrontIcon} />
      <SidebarRow title="Videos" Icon={VideoLibraryIcon} />
      <Sidebar Icon={ExpandMoreOutlined} title="Marketplace" /> */}
    </div>
  );
};

export default Sidebar;
