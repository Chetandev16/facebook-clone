import { LocalHospital } from "@material-ui/icons";
import PeopleIcon from "@material-ui/icons/PeopleIcon"
import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName}/>
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center"/>
      <SidebarRow Icon={PeopleIcon} title="Pages"/>
      <SidebarRow title=""/>
      <SidebarRow title=""/>
    </div>
  );
};

export default Sidebar;
