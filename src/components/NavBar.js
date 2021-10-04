import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

function NavBar({ loggedInUser, setCurrentLoggedInUser }) {
  const logoutUser = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
      withCredentials: true,
    });
    setCurrentLoggedInUser("");
  };

  return loggedInUser ? (
    <>
      <p>Welcome {loggedInUser.username}</p>
      <nav>
        <ul>
          <li>
            <NavLink exact to="/">
              <button onClick={logoutUser}>Logout</button>
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} exact to="/">
              Landing Page
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} exact to="/home">
              HomePage
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} exact to="/tasks">
              Tasks
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/tasks/graphs">
              Tasks Stats
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/tasks/add">
              Add Tasks
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} exact to="/skills">
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/skills/graphs">
              Skills Stats
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/skills/add">
              Add Skills
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/user">
              User Details
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/user/stats">
              User Stats
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/affirmations">
              Affirmations
            </NavLink>
          </li>
          <li>
            <NavLink activeStyle={{ color: "red" }} to="/zen">
              Zen
            </NavLink>
          </li>
        </ul>
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
