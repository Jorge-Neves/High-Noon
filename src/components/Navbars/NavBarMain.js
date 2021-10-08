import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./NavBarMain.css";

function NavBarMain({ loggedInUser, setCurrentLoggedInUser }) {
  return (
    <nav className="navi-m-bar container-fluid">
      <div className="navi-m-bar-mini">
        <NavLink to="/home">
          <img
            src="../../logo.png"
            className="landing-logo-size"
            alt="high noon logo"
          />
          <span className="landing-logo-text-size">High Noon</span>
        </NavLink>
      </div>

      <div>
        <NavLink activeStyle={{ color: "red" }} exact to="/home">
          <span className="main-logo-text-size">Home</span>
        </NavLink>
      </div>
      <div>
        <NavLink activeStyle={{ color: "red" }} exact to="/tasks">
          <span className="main-logo-text-size">Tasks</span>
        </NavLink>
      </div>
      <div>
        <NavLink activeStyle={{ color: "red" }} exact to="/skills">
          <span className="main-logo-text-size">Skills</span>
        </NavLink>
      </div>
      <div>
        <NavLink activeStyle={{ color: "red" }} to="/user">
          <span className="main-logo-text-size">User</span>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBarMain;
