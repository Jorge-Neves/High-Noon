import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

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
    <ul>
      {tasks.map((task) => {
        return (
          <li key={task._id}>
            <NavLink to={`/tasks/${task._id}`}>{task.name}</NavLink>
          </li>
        );
      })}
    </ul>
  );
}

export default TaskList;
