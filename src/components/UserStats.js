import React from "react";
import axios from "axios"
import { LoggedUserConsumer} from "../context/loggedUser"
import "./UserStats.css"

function UserStats(){

    return(
<div className="user-bg">
            <div className="row">
                <div className="col-md-6 mx-auto p-0">
                   
        <h2>User Stats</h2>
                </div>
            </div>
        </div>


    )
}

export default UserStats;