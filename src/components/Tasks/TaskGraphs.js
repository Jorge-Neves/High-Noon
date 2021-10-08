import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./TaskGraphs.css"
import NavBarTasks from "../Navbars/NavBarTasks";
import Footer from "../Navbars/Footer";

function TaskGraphs() {
  const [taskNames, setTaskNames] = useState([]);
  const [taskTimes, setTaskTimes] = useState([]);

  useEffect(() => {
    async function getUserTaskNames() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/t/graphs`,
        { withCredentials: true }
      );
      const names = response.data;
      const namesArray = names.map((name) => {
        return [`${name.name}`];
      });
   
      const numberssArray = names.map((name) => {
        return [name.timeSpent];
      });

      setTaskNames(namesArray);

      setTaskTimes(numberssArray);
    }
    getUserTaskNames();
  }, []);

  const data = {
    labels: taskNames,
    datasets: [
      {
        label: "Productivity",
        data: taskTimes,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="row-vertical-tasks">
            <div>
              <NavBarTasks />
            </div>
            <div className="tasks-top-h1-margin">
              <h1> Tasks Doughnut Graph </h1>
            </div>
            <div>
                 <img src="/GraphsHeader.jpg" alt="people talking" />
            </div>
          <div>
            <Doughnut data={data} />
          </div>
          <div className="tasks-top-h1-margin">
              <h1> Keep up the good work! </h1>
            </div>
            <div>
              <Footer />
            </div>
      
    </div>
  );
}

export default TaskGraphs;
