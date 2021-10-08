import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { LoggedUserConsumer} from "../../context/loggedUser"
import "./TaskList.css";
import NavBarTasks from "../Navbars/NavBarTasks";
import Footer from "../Navbars/Footer";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function getAllTasks() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/tasks`,
        { withCredentials: true }
      );
      setTasks(response.data);
    }
    getAllTasks();
  }, []);

  return (
    <div className="task-list-bg row-vertical-tasks">
            <div>
              <NavBarTasks />
            </div>
            <div className="row-tasks-margin">
                 {tasks.map((task) => {
        return (
          <div>
          <NavLink to={`/tasks/${task._id}`}><h3>{task.name}{task.timeSpent}</h3></NavLink>
          </div>
            );
             })}
             </div>
            <div>
              <Footer />
            </div>
        
        </div>




  );
}

export default TaskList;
