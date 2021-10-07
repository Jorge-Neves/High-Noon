import React from "react";
import axios from "axios"
import { LoggedUserConsumer} from "../context/loggedUser"
import "./UserDetails.css"

function UserDetails(){

    return(


        <div className="user-details-bg">
            <div className="row">
                <div className="col-md-6 mx-auto p-0">
                   
        <h2>User Details</h2>
                </div>
            </div>
        </div>
    )
}

export default UserDetails;