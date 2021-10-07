import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./NavBarHabits.css"

function NavBarHabits({ loggedInUser, setCurrentLoggedInUser }) {
  const logoutUser = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
      withCredentials: true,
    });
    setCurrentLoggedInUser("");
  };

   return (
    <nav className="navi-h-bar" >
    <div className="navi-h-bar-mini">
    <NavLink to ="/">
            <img src="../../logo.png" className="landing-logo-size" alt="high noon logo" />
            <span className="landing-logo-text-size">
              High Noon
           </span>
           </NavLink>
    </div>
   <div>
   <NavLink activeStyle={{ color: "red" }} to="/home">
   <span className="habits-logo-text-size">
          Home
       </span>
       </NavLink>
   </div>
   <div>
       <NavLink activeStyle={{ color: "red" }} exact to="/habits">
       <span className="habits-logo-text-size">
          Habits
       </span>
      </NavLink>
  </div>
  <div>
       <NavLink activeStyle={{ color: "red" }} exact to="/habits/graphs">
       <span className="habits-logo-text-size">
          Habit Stats
       </span>
      </NavLink>
  </div>
  <div>
       <NavLink activeStyle={{ color: "red" }} exact to="/habits/add">
       <span className="habits-logo-text-size">
          Add Habit
       </span>
      </NavLink>
  </div>
    
 </nav> 
   ) 


 

   
  
}

export default NavBarHabits;