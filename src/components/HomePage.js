import React from "react";
import axios from "axios"
import { LoggedUserConsumer} from "../context/loggedUser"

function HomePage(){

    return(
        <h2>HomePage (user is logged in) </h2>
    )
}

export default HomePage;