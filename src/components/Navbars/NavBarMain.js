import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./NavBarMain.css"

function NavBarMain({ loggedInUser, setCurrentLoggedInUser }) {
  const logoutUser = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
      withCredentials: true,
    });
    setCurrentLoggedInUser("");
  };

   return(
       <nav className="navi-m-bar container-fluid" >
          <div className="navi-m-bar-mini">
            <img src="../../logo.png" className="main-logo-size" alt="high noon logo" />
            <span className="main-logo-text-size">
              High Noon
           </span>
           </div>
           <div>
             <NavLink exact to="/">
               <button onClick={logoutUser}><span className="main-logo-text-size">
               Logout
           </span></button>
             </NavLink>
           </div>
           <div>
             <NavLink activeStyle={{ color: "red" }} exact to="/home">
             <span className="main-logo-text-size">
              Home
           </span>
             </NavLink>
           </div>
           <div>
             <NavLink activeStyle={{ color: "red" }} exact to="/tasks">
             <span className="main-logo-text-size">
              Tasks
           </span>
             </NavLink>
           </div>
           <div>
             <NavLink activeStyle={{ color: "red" }} exact to="/skills">
             <span className="main-logo-text-size">
              Skills
           </span>
             </NavLink>
           </div>
           <div>
             <NavLink activeStyle={{ color: "red" }} to="/user">
             <span className="main-logo-text-size">
              User
           </span>
             </NavLink>
           </div>
       </nav>
   )

 

   
  
}

export default NavBarMain;

