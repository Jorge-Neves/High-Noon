import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./NavBar.css"

function NavBar({ loggedInUser, setCurrentLoggedInUser }) {
  // const logoutUser = async () => {
  //   await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
  //     withCredentials: true,
  //   });
  //   setCurrentLoggedInUser("");
  // };

  // return loggedInUser ? (
  //   <>
  //    <div class="page">
  // <nav class="page__menu page__custom-settings menu">
  //   <ul class="menu__list r-list">
  //     <li class="menu__group"><NavLink  exact to="/home" class="menu__link r-link text-underlined">Home</NavLink></li>
  //     <li class="menu__group"><NavLink exact to="/" class="menu__link r-link text-underlined">Signup</NavLink></li>
  //     <li class="menu__group"><NavLink exact to="/login" class="menu__link r-link text-underlined">login</NavLink></li>
  //     <li class="menu__group"><NavLink exact to="/login-google" class="menu__link r-link text-underlined">login with Google</NavLink></li>
  //     <li class="menu__group"><NavLink exact to="/resources" class="menu__link r-link text-underlined">Resources</NavLink></li>
  //   </ul>
//   </nav>
// </div>
    // </>
//   ) : (
// //     <div class="page">
// //   <nav class="page__menu page__custom-settings menu">
// //   <ul class="menu__list r-list">
// //     <li class="menu__group"><NavLink  exact to="/" class="menu__link r-link text-underlined">Landing Page</NavLink></li>
// //     <li class="menu__group"><NavLink exact to="/signup" class="menu__link r-link text-underlined">Signup</NavLink></li>
// //     <li class="menu__group"><NavLink exact to="/login" class="menu__link r-link text-underlined">login</NavLink></li>
// //     <li class="menu__group"><NavLink exact to="/login-google" class="menu__link r-link text-underlined">login with Google</NavLink></li>
// //     <li class="menu__group"><NavLink exact to="/resources" class="menu__link r-link text-underlined">Resources</NavLink></li>
// //   </ul>
// // </nav>
// // </div>
//   );
  return (
    <>
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
    </>
  )
}

export default NavBar;
