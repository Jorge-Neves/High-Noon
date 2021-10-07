import React from "react";
import axios from "axios"
import Contacts from "./Conctacts";
import "./LandingPage.css"
import NavBarLanding from "./Navbars/NavBarLanding";
import Footer from "./Navbars/Footer";
import { Row } from "react-bootstrap"
import { NavLink } from "react-router-dom"


function LandingPage(){

    return(
        <div className="landing-bg row-vertical-landing">
            <div className="row-landing">
                    <div>
                        <NavBarLanding />
                    </div>
            </div>
            <div className="row-landing">
                    <NavLink to="/signup">
                    <button className="button-l close-l">Enter</button>
                    </NavLink>
            </div>
            <div className="row-landing">
                    <div>
                        <Footer />
                    </div>
            </div>
        </div>
  
         
      
    )
}

export default LandingPage;

<div className="landing-bg">
            <div className="row">
                
                  
            </div>
                
            
        </div>