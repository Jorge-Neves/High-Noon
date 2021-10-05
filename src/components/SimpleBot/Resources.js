import React from "react";
import axios from "axios"
import ChatBot from 'react-simple-chatbot';

function SimpleBot(){

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

export default SimpleBot;