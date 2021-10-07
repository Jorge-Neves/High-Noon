import React from "react";
import axios from "axios"
import Contacts from "./Conctacts";
import "./LandingPage.css"
import NavBarLanding from "./Navbars/NavBarLanding";
import Footer from "./Navbars/Footer";


function LandingPage(){

    return(
        <div className="landing-bg">
            <div className="row">
                
                    <div>
                        <NavBarLanding />
                    </div>
            </div>
            <div className="row">
                    <button>Test</button>
                    </div>
            <div className="row">
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