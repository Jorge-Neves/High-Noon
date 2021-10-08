import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./NavBarLanding.css"

function NavBarLanding() {

   return(
   
       <nav className="navi-l-bar" >
        <div className="navi-l-bar-mini">
        <NavLink to ="/">
            <img src="../../logo.png" className="landing-logo-size" alt="high noon logo" />
            <span className="landing-logo-text-size">
              High Noon
           </span>
           </NavLink>
        </div>
       <div>
       <NavLink activeStyle={{ color: "#ff9ea9" }} to="/signup">
       <span className="landing-logo-text-size">
              SignUp
           </span>
           </NavLink>
       </div>
       <div>
           <NavLink activeStyle={{ color: "#ff9ea9" }} exact to="/login">
           <span className="landing-logo-text-size">
              Login
           </span>
          </NavLink>
      </div>
       <div>
           <NavLink activeStyle={{ color: "#ff9ea9" }} exact to="/resources">
           <span className="landing-logo-text-size">
              Resources
           </span>
          </NavLink>
      </div>
      <div>
           <NavLink activeStyle={{ color: "#ff9ea9" }} exact to="/contacts">
           <span className="landing-logo-text-size">
              Meet the Team
           </span>
          </NavLink>
      </div>
        
    </nav> 
   );

 

   
  
}

export default NavBarLanding;

