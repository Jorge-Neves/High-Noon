import React from "react";
import axios from "axios"
import ChatBot from 'react-simple-chatbot';
import { LoggedUserConsumer} from "../../context/loggedUser"

function Bot(){

    return(
        <ChatBot
  steps={[
    {
      id: 'hello-world',
      message: 'Hello World!',
      end: true,
    },
  ]}
/>
    )
}

export default Bot;