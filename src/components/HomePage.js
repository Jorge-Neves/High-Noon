import React, { useContext } from "react";
import axios from "axios"
import { LoggedUserConsumer} from "../context/loggedUser"
import Contacts from "./Conctacts";
import "./HomePage.css"
function HomePage(){
    const loggedInUser = useContext(LoggedUserConsumer)
    return(
    <>
        <div className="home-bg">
             <div className="home-bg"> 
             <br/>
                <h1> welcome</h1>
             <br/>
            </div>  
        </div>
        <div className="container">
            <Contacts />
        </div>
    </>
    )
}

export default HomePage;