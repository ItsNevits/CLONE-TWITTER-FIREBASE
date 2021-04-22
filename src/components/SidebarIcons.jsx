import React from "react";

const SidebarIcons = ({ text, Icon, active }) => {
  return (
    <div id='content-icons' active={active}>
      <Icon />
      <h2>{text}</h2>
    </div>
  );
};

export default SidebarIcons;
