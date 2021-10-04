import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from "axios"
import { LoggedUserConsumer} from "../../context/loggedUser"


function HabitGraphs(){

    const [habitDatesUser, setHabitDatesUser] = useState([]);
    const [HabitStreak, setHabitStreak] = useState([]);
    const [habitDatesCalcs, setHabitDatesCalcs] = useState([]);
    const [missDatesUser, setMissDatesUser] = useState([]);
    const [missStreak, setMissStreak] = useState([]);
    const [missDatesCalcs, setMissDatesCalcs] = useState([]);
  

    useEffect(() => {
        async function getUserHabitData() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/h/success`,
            { withCredentials: true }

          );
            apiResponse = response.data
            
          setHabitDatesUser(apiResponse.successArrayStrings);
          setMissDatesCalcs(apiResponse.missArrayIntegers);
          
          setHabitStreak(apiResponse.successCount);

          setMissDatesUser(apiResponse.missArrayStrings);
          setMissDatesCalcs(apiResponse.missArrayIntegers);

          setMissStreak(apiResponse.missCount);
          


        

     
        }
        getUserHabitData();
      }, []);


    
    


    return(
        <>
         <h2>habits Dates User : {habitDatesUser}</h2>
         <h2>Habit Streak : {HabitStreak}</h2>
         <h2>Habits Dates Calc: {habitDatesCalcs}</h2>
         <h2>Dates Missed User : {missDatesUser}</h2>
         <h2>Dates Missed Calc{missDatesCalcs}</h2>
         <h2>Times missed Streak {missStreak}</h2>
         
        </>
      );
}

export default HabitGraphs;