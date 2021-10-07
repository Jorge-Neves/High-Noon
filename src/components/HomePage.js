import React, { useContext } from "react";
import axios from "axios"
import { LoggedUserConsumer} from "../context/loggedUser"
import Contacts from "./Conctacts";
import "./HomePage.css"
import NavBarMain from "./Navbars/NavBarMain";
import Footer from "./Navbars/Footer";

function HomePage(){
    const loggedInUser = useContext(LoggedUserConsumer)
    return(
    <>
        <div className="home-bg row-vertical-home">
        <div className="row-home"> 
                <NavBarMain />
            </div>  
             <div className="row-home"> 
                <h1> welcome {loggedInUser.username}</h1>
            </div>  
        </div>
        <div className="row-home">
            <Footer />
        </div>
    </>
    )
}

export default HomePage;