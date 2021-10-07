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
        `${process.env.REACT_APP_SERVER_HOSTNAME}/graphs`,
        { withCredentials: true }
      );
      const names = response.data;
      const namesArray = names.map((name) => {
        return [`${name.name}`];
      });
      const numbers = response.data;
      const numberssArray = names.map((name) => {
        return [name.timeSpent];
      });

      setTaskNames(namesArray);

      setTaskTimes(numberssArray);
    }
    getUserTaskNames();
  }, []);

  /* useEffect(() => {
        async function getUserTaskTimes() {
          const response = await axios.get(
            `${process.env.REACT_APP_SERVER_HOSTNAME}/graphs/time`,
            { withCredentials: true }
          );
          setTaskTimes(response.data.timeSpent);
        }
        getUserTaskTimes();
      }, []); */

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
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <div className="header">
            <h1 className="title">Doughnut Chart</h1>
            <div className="links"></div>
          </div>

          <div>
            <Doughnut data={data} />
          </div>
        </div>
      </div>
      <div>
              <Footer />
         </div>
    </div>
  );
}

export default TaskGraphs;
