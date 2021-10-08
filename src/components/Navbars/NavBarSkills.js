import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./NavBarSkills.css"

function NavBarSkills() {
  
   return (
    <nav className="navi-s-bar" >
    <div className="navi-s-bar-mini">
    <NavLink to ="/home">
            <img src="../../logo.png" className="landing-logo-size" alt="high noon logo" />
            <span className="landing-logo-text-size">
              High Noon
           </span>
           </NavLink>
    </div>
   <div>
   <NavLink activeStyle={{ color: "red" }} to="/home">
   <span className="skills-logo-text-size">
          Home
       </span>
       </NavLink>
   </div>
   <div>
       <NavLink activeStyle={{ color: "red" }} exact to="/skills">
       <span className="skills-logo-text-size">
          Skills
       </span>
      </NavLink>
  </div>
  <div>
       <NavLink activeStyle={{ color: "red" }} exact to="/skills/graphs">
       <span className="skills-logo-text-size">
          Skill Stats
       </span>
      </NavLink>
  </div>
  <div>
       <NavLink activeStyle={{ color: "red" }} exact to="/skills/add">
       <span className="skills-logo-text-size">
          Add Skill
       </span>
      </NavLink>
  </div>
    
 </nav> 
   ) 

 
 

   
  
}

export default NavBarSkills;