import React from "react";
import axios from "axios"
import Chatbot from "react-chatbot-kit"
import config from "../Chatbot/config"
import ActionProvider from "../Chatbot/ActionProvider"
import MessageParser from "../Chatbot/MessageParser";
import "./AI.css"


function AI(){

    return(
        <div>
            <h2>Green Light Red Light</h2>
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}  />
        </div>
    )
}

export default AI;