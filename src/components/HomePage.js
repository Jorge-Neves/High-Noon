import React, { useContext } from "react";
import axios from "axios"
import { LoggedUserConsumer} from "../context/loggedUser"
import Contacts from "./Conctacts";
import "./HomePage.css"
import NavBarMain from "./Navbars/NavBarMain";
import Footer from "./Navbars/Footer";
import { NavLink } from "react-router-dom"


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
             <div className="row-home">
                    <NavLink to="/tasks">
                    <button className="button-m close-m">Tasks</button>
                    </NavLink>
            </div>
            <div className="row-home">
                    <NavLink to="/skills">
                    <button className="button-m close-m">Skills</button>
                    </NavLink>
            </div>
            <div className="row-home">
                    <NavLink to="/Habits">
                    <button className="button-m close-m">Habits</button>
                    </NavLink>
            </div>  
        </div>
       
        <div className="row-home">
            <Footer />
        </div>
    </>
    )
}

export default HomePage;