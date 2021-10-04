import React from "react";
import axios from "axios"
import { LoggedUserConsumer} from "../context/loggedUser"
import Contacts from "./Conctacts";
function HomePage(){

    return(
        <>
        <h2>HomePage (user is logged in) </h2>
        <Contacts />
        </>
    )
}

export default HomePage;