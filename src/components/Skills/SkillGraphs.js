import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import axios from "axios"
import { LoggedUserConsumer} from "../../context/loggedUser"


function SkillGraphs(){

    const [skillNames, setSkillNames] = useState([]);
    const [skillTimes, setSkillTimes] = useState([]);
  

    useEffect(() => {
        async function getUserSkillNames() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/s/graphs/names`,
            { withCredentials: true }

          );
            const names = response.data
            const namesArray = names.map((name) => {
                return [`${name.name}`];
            });
                const numbers = response.data
                const numberssArray = names.map((name) => {
                    return [name.timeSpent];
                });
            
          setSkillNames(namesArray);
    
          setSkillTimes(numberssArray);

     
        }
        getUserSkillNames();
      }, []);

    
    const data = {
        labels: skillNames,
        datasets: [
          {
            label: 'Progress',
            data: skillTimes,
            borderWidth: 1,
          },
        ],
      };


    return(
        <>
          <div className='header'>
            <h1 className='title'>Doughnut Chart</h1>
            <div className='links'>

            </div>
          </div>
          
          <div>
          <Doughnut data={data} />
          </div>
        
        </>
      );
}

export default SkillGraphs;