import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./Footer.css"

function Footer() {
 
   return (  
       <nav className="footer-bar container-fluid" >
           <div>
             <NavLink activeStyle={{ color: "red" }} exact to="/home">
               Contact Us
             </NavLink>
           </div>
       </nav>
   ) 


 

   
  
}

export default Footer;