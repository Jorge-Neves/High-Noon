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
            <div className="row">
                <div className="col-md-6 mx-auto p-0">
                    
    <div className="container">
      {tasks.map((task) => {
        return (
          <div className="card row-horizontal-tasks">
      <div className="face face1">
        <div className="content">
          <img src="/reddit.png" />
          <NavLink to={`/tasks/${task._id}`}><h3>{task.name}</h3></NavLink>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>
            {task.timeSpent}
          </p>
        </div>
      </div>
    </div>
        );
      })}
    </div>
                </div>
            </div>
            <div>
              <Footer />
            </div>
        </div>




  );
}

export default TaskList;
