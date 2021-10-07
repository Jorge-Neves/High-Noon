import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./NavBar.css"

function NavBarTasks({ loggedInUser, setCurrentLoggedInUser }) {
  const logoutUser = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
      withCredentials: true,
    });
    setCurrentLoggedInUser("");
  };

   return (
       <nav className="navi container-fluid" >
           <div>
             <NavLink activeStyle={{ color: "red" }} exact to="/home">
               Home
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
       </nav>
   ) 


{/* <nav className="navi-t-bar" >
   <div className="navi-t-bar-mini">
       <img src="../../logo.png" className="tasks-logo-size" alt="high noon logo" />
       <span className="tasks-logo-text-size">
         High Noon
      </span>
   </div>
  <div>
  <NavLink activeStyle={{ color: "red" }} to="/signup">
  <span className="tasks-logo-text-size">
         Home
      </span>
      </NavLink>
  </div>
  <div>
      <NavLink activeStyle={{ color: "red" }} exact to="/resources">
      <span className="tasks-logo-text-size">
         Tasks
      </span>
     </NavLink>
 </div>
 <div>
      <NavLink activeStyle={{ color: "red" }} exact to="/resources">
      <span className="tasks-logo-text-size">
         Task Stats
      </span>
     </NavLink>
 </div>
 <div>
      <NavLink activeStyle={{ color: "red" }} exact to="/resources">
      <span className="tasks-logo-text-size">
         Add Task
      </span>
     </NavLink>
 </div>
   
</nav>  */}

   
  
}

export default NavBarTasks;

