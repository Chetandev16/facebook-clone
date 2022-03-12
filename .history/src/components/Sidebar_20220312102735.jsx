import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
      <SidebarRow/>
    </div>
  );
};

export default Sidebar;