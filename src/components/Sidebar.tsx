import React from "react";
import logo from "../assets/logo.svg";
import bright from "../assets/bright.svg";
import dull from "../assets/dull.svg";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <ul>
        <li>
          <img className="logo svg" src={logo} alt="logo" />
        </li>
        <li style={{ marginTop: "2rem" }} className="circle">
          <img className=" svg" src={dull} alt="logo" />
        </li>
        <li className="circle">
          <img className="svg" src={dull} alt="logo" />
        </li>
        <li className="circle">
          <img className="svg" src={dull} alt="logo" />
        </li>
        <li className="circle">
          <img className="svg" src={dull} alt="logo" />
        </li>
        <li className="circle">
          <img className="svg" src={dull} alt="logo" />
        </li>
        <li className="circle">
          <img className="svg" src={bright} alt="logo" />
        </li>
        <li className="circle">
          <img className="svg" src={dull} alt="logo" />
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
