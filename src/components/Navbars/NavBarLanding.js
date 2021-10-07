import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./NavBarLanding.css"

function NavBarLanding() {

   return(
   
       <nav className="navi-l-bar" >
        <div className="navi-l-bar-mini">
            <img src="../../logo.png" className="landing-logo-size" alt="high noon logo" />
            <span className="landing-logo-text-size">
              High Noon
           </span>
        </div>
       <div>
       <NavLink activeStyle={{ color: "red" }} to="/signup">
       <span className="landing-logo-text-size">
              Enter
           </span>
           </NavLink>
       </div>
       <div>
           <NavLink activeStyle={{ color: "red" }} exact to="/resources">
           <span className="landing-logo-text-size">
              Resources
           </span>
          </NavLink>
      </div>
      <div>
           <NavLink activeStyle={{ color: "red" }} exact to="/resources">
           <span className="landing-logo-text-size">
              Meet the Team
           </span>
          </NavLink>
      </div>
        
    </nav> 
   );

 

   
  
}

export default NavBarLanding;

