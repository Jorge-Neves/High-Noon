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
                <div className="col-md-6 mx-auto p-0">
                    <div>
                        <NavBarLanding />
                    </div>
                    <button></button>
                    <div>
                        <Footer />
                    </div>
                </div>
            </div>
        </div>
  
         
      
    )
}

export default LandingPage;