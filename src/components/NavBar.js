import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

import"./NavBar.css"

function NavBar({ loggedInUser, setCurrentLoggedInUser }) {
  const logoutUser = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
      withCredentials: true,
    });
    setCurrentLoggedInUser("");
  };

  return loggedInUser ? (
    <>
      <div className="navi container-fluid">
        <p>Welcome {loggedInUser.username}</p>
      </div>
      <nav className="navi container-fluid" >
          <div>
            <NavLink exact to="/">
              <button onClick={logoutUser}>Logout</button>
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} exact to="/">
              Landing Page
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} exact to="/home">
              HomePage
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} exact to="/tasks">
              Tasks
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} to="/tasks/graphs">
              Tasks Stats
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} to="/tasks/add">
              Add Tasks
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} exact to="/skills">
              Skills
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} to="/skills/graphs">
              Skills Stats
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} to="/skills/add">
              Add Skills
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} to="/user">
              User Details
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} to="/user/stats">
              User Stats
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} to="/affirmations">
              Affirmations
            </NavLink>
          </div>
          <div>
            <NavLink activeStyle={{ color: "red" }} to="/zen">
              Zen
            </NavLink>
          </div>
      </nav>
    </>
  ) : (
    <nav>
      <ul>
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/">
            Landing Page
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/tasks">
            Tasks
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to="/signup">
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to="/login">
            Login
          </NavLink>
        </li>
        {/* GOOGLE_LOGIN */}
        <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/login-google">
            Login With Google
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
