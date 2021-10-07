import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./Footer.css"

function Footer() {
 
   return (  
       <nav className="footer-bar container-fluid" >
           <div>
             <NavLink activeStyle={{ color: "red" }} exact to="/contacts">
             <span className="footer-logo-text-size">
             Contact Us
           </span>
             </NavLink>
           </div>
       </nav>
   ) 


 

   
  
}

export default Footer;