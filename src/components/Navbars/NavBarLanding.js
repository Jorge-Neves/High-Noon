import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./NavBarMain.css"

function NavBarLanding() {

   return(
   
       <nav className="navi-l-bar" >
       <div>
       <NavLink activeStyle={{ color: "red" }} to="/signup">
             Enter
           </NavLink>
       </div>
       <div>
           <NavLink activeStyle={{ color: "red" }} exact to="/resources">
            Resources
          </NavLink>
      </div>
        
    </nav> 
   );

 

   
  
}

export default NavBarLanding;

