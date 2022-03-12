import React from "react";
import "./sidebar.css";
import SidebarRow from "./SidebarRow";
const Sidebar = () => {
  return (
    <div className="sidebar">
      <SidebarRow title="Pages"/>
      <SidebarRow title=""/>
      <SidebarRow title=""/>
      <SidebarRow title=""/>
      <SidebarRow title=""/>
    </div>
  );
};

export default Sidebar;
