import React, { useContext } from "react";
import axios from "axios"
import { LoggedUserConsumer} from "../context/loggedUser"
import Contacts from "./Conctacts";
import "./HomePage.css"
import NavBarMain from "./Navbars/NavBarMain";
import Footer from "./Navbars/Footer";
import { NavLink } from "react-router-dom"
import ChatBot from 'react-simple-chatbot';
import Bot from "./SimpleBot/Bot";

function HomePage(){
    const loggedInUser = useContext(LoggedUserConsumer)
    return(
    <>
        <div className="home-bg row-vertical-home">
        <div className="row-home"> 
                <NavBarMain />
            </div>  
             <div className="row-home-logged-margin"> 
                <h1> welcome {loggedInUser.username}</h1>
            </div>

             <div className="row-home-freya">
            <Bot />
        </div>
        
        <div className="row-home">
            <Footer />
        </div>
        </div>
    </>
    )
}

export default HomePage;