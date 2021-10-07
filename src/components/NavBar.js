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
     <div class="page">
     <nav class="nav">
  <ul class="nav__menu">
  <li class="nav__menu-item"><NavLink exact to="/home">Home</NavLink></li>
  <li class="nav__menu-item"><NavLink exact to="tasks">Tasks</NavLink>
  <li class="nav__submenu-item"> <NavLink exact to="/tasks/add">Add a Task</NavLink></li>
      <li class="nav__submenu-item"> <NavLink exact to="/tasks/graphs">Task Graphs</NavLink></li>
  </li>
  <li class="nav__menu-item"><NavLink exact to="resources">Resources</NavLink></li>
  </ul>
</nav>
</div>
    </>
  ) : (
    <div class="page">
   <nav class="nav">
  <ul class="nav__menu">
  <li class="nav__menu-item"><NavLink exact to="/">Landing Page</NavLink></li>
  <li class="nav__menu-item"><NavLink exact to="#">Enter</NavLink>
    <ul class="nav__submenu">
      <li class="nav__submenu-item"> <NavLink exact to="/signup">Signup</NavLink></li>
      <li class="nav__submenu-item"> <NavLink exact to="/login">login</NavLink></li>
      <li class="nav__submenu-item"> <NavLink exact to="/login-google">Login with Google</NavLink></li>
    </ul>
  </li>
  <li class="nav__menu-item"><NavLink exact to="resources">Resources</NavLink></li>
  </ul>
</nav>
 </div>
   );
  
}

export default NavBar;


