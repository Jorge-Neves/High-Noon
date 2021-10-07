import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./NavBarTasks.css"

function NavBarTasks() {
   return (
    <nav className="navi-t-bar" >
    <div className="navi-t-bar-mini">
    <NavLink to ="/">
            <img src="../../logo.png" className="landing-logo-size" alt="high noon logo" />
            <span className="landing-logo-text-size">
              High Noon
           </span>
           </NavLink>
    </div>
   <div>
   <NavLink activeStyle={{ color: "red" }} to="/home">
   <span className="tasks-logo-text-size">
          Home
       </span>
       </NavLink>
   </div>
   <div>
       <NavLink activeStyle={{ color: "red" }} exact to="/tasks">
       <span className="tasks-logo-text-size">
          Tasks
       </span>
      </NavLink>
  </div>
  <div>
       <NavLink activeStyle={{ color: "red" }} exact to="/tasks/graphs">
       <span className="tasks-logo-text-size">
          Task Stats
       </span>
      </NavLink>
  </div>
  <div>
       <NavLink activeStyle={{ color: "red" }} exact to="/tasks/add">
       <span className="tasks-logo-text-size">
          Add Task
       </span>
      </NavLink>
  </div>
    
 </nav> 
   ) 




   
  
}

export default NavBarTasks;

