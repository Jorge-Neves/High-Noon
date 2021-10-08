import React, { useState, useEffect } from "react";

import axios from "axios";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./HabitGraphs.css";
import NavBarHabits from "../Navbars/NavBarHabits";
import Footer from "../Navbars/Footer";


function HabitGraphs({match}) {
  const [habits, setHabits] = useState([]);
  const [times, setTimes] = useState(0);
  const [names, setNames] = useState("");
  

  useEffect(() => {
    async function getHabitDetails() {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/habits/${match.params.id}`);
      setHabits(response.data);
      console.log(response.data)
      setTimes(response.data.date.length)
      setNames(response.data.name)
    }
    getHabitDetails();
  }, []);
  return (
    <div className="habits-graphs-bg row-vertical-habits">
        <div>
        <NavBarHabits />
      </div>
      <div>
        <h1 className="habit-text habit-result-top-margin" >You accomplished your habit "{names}" {times} times </h1>
      </div>
      <div>
        <h1 className="habit-text">The dates you accomplished your habit this month (dd-mm-yy)</h1>
      </div>
      <div className="row">
      <ul>
          {habits.date && habits.date.map((e, i) => {
            return (
              <li key={i}>
              <h5 className="habit-text">{e}</h5>
              </li>
              );
          })}
          
        </ul>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export default HabitGraphs;
