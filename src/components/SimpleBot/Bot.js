import React, { useEffect, useState } from "react";
import axios from "axios"
import ChatBot from 'react-simple-chatbot';
import { LoggedUserConsumer} from "../../context/loggedUser"


function Bot(){


   

  const random = Math.floor((Math.random() * 1000000) + 300000)
  const remainder = 1500000 - random
  

  function Affirmations(){
    const affirmationsArray = ["You got this", "You'll figure it out", "You're a smart cookie", "I believe in you", "Struggling is part of learning", "Mistakes don't make you less capable", "We are all works in progress", "You are a capable human", "You know more than you think", "10x engineers are a myth", "If everything was easy you'd be bored", "I admire you for taking this on", "You're resourceful and clever", "You'll find a way"]
    const randomAffirmation = Math.floor((Math.random() * affirmationsArray.length))
    const affirmation = affirmationsArray[randomAffirmation]
    return affirmation
  }


  function Greetings(){
  const greetingsArray = ['Hey', 'Is it High Noon yet?', 'Feeling inspired?','Greetings', 'Happy to see you again']
  const randomGreeting = Math.floor((Math.random() * greetingsArray.length))
  const greeting = greetingsArray[randomGreeting]
  return greeting
}

// function Assist(){
//   const greetingsArray = ['Hey', 'Is it High Noon yet?', 'Feeling inspired?','Greetings', 'Happy to see you again']
//   const randomGreeting = Math.floor((Math.random() * greetingsArray.length))
//   const greeting = greetingsArray[randomGreeting]
//   return greeting
// }


    return(
        <ChatBot
        speechSynthesis={{ enable: true, lang: 'en' }}
  steps={[
    {
      id: '0',
      message: `User entered the Room...`,
      trigger: '1',
    },
    {
      id: '1',
      message: `${Greetings()}`,
      trigger: '2u',
    },
    {
      id: '2',
      message: 'What are you in the mood for?',
      trigger: '2u',
    },
    {
      id: '2u',
      options: [
        { value: 1, label: 'zen', trigger: '3' },
        { value: 2, label: 'timer', trigger: '4' },
      ],
    },
    {
      id: '3',
      message: 'Take some time for yourself',
      trigger: '3u'
    },
    {
      id: '3u',
      options: [
        { value: 1, label: 'Affirmation', trigger: '6' },
        { value: 2, label: 'Back', trigger: '7' },
      ],
    },
    {
      id: '4',
      message: 'A moment of focus',
      trigger: '4u',
    },
    {
      id: '4u',
      options: [
        { value: 1, label: 'Pomodoro', trigger: '9' },
        { value: 2, label: 'Back', trigger: '2' }
      ],
    },
    {
      id: '6',
      message: `${Affirmations()}`,
      options: [
        { value: 1, label: 'Back', trigger: '7' },

      ],
    },
    {
      id: '7',
      message: '- Going back -',
      trigger: '3',
    },
    {
      id: '9',
      message: '- Let us start a Pomodoro -',
      trigger: '9u',
    },
    {
      id: '9u',
      options: [
        { value: 1, label: 'Start', trigger: '14check' },
      ],
    },
    {
      id: '12',
      message: '- Will you stay a little while longer?-',
      trigger: '12u',
      
    },
    {
      id: '12u',
      options: [
        { value: 1, label: 'Stay', trigger: '6' },
        { value: 2, label: 'Leave', trigger: '2' },
        { value: 3, label: 'Time', trigger: '13' },
      ],
    },
    {
      id: '13',
      message: 'It seems to be High Noon',
      trigger: '13u',
    },
    {
      id: '13u',
      options: [
        { value: '1', label: 'High Noon', trigger: '20' },

      ],
    },
    {
      id: '14check',
      delay: random,
      message: '- are you there? Did you maintain focus? -',
      trigger: '14checkPromptu',
    },
    {
      id: '14checkPromptu',
      options: [
        { value: 1, label: 'Continue', trigger: '14finalmark' },
        { value: 2, label: 'Back', trigger: '2' },
      ],
    },
    {
      id: '14finalmark',
      delay: remainder,
      message: '- 25 minutes have passed - you have successfully completed a pomodoro- press anything to continue',
       trigger: '14u',
    },
    {
      id: '14u',
      options: [
        { value: 1, label: 'Continue', trigger: '15' },

      ],
    },
    {
      id: '15',
      message: '- Shall we take a break before continuing. or Do you wish to continue on another occasion?-',
      trigger: '15u'
    },
    {
      id: '15u',
      options: [
        { value: 1, label: 'Continue', trigger: '16t' },
        { value: 2, label: 'Anything', trigger: '2' },
      ],
    },
    {
      id: '16t',
      delay: 300000,
      message: "filler",
      trigger: '16',
    },
    {
      id: '16',
      message: '- Did you enjoy your 5 min break? Shall we start another Pomodoro? -',
      trigger: '16u',
    },
    {
      id: '16u',
      options: [
        { value: 1, label: 'New', trigger: '9' },
        { value: 2, label: 'Leave', trigger: '2' },
      ],
    },
    {
      id: '20',
      message: `- ...${Date.now}... `,
      trigger: '2',
    },
  ]}
/>
    )
}

export default Bot;