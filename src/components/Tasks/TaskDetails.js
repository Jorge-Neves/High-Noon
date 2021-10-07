import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./TaskDetails.css"

function TaskDetails({ match }) {
  const [tasks, setTasks] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function getTaskDetails() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/tasks/${match.params.id}`
      );
      setTasks(response.data);
    }
    getTaskDetails();
  }, []);

  const handleDeleteProject = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_HOSTNAME}/tasks/${id}`);
    toast.info("task deleted");
    history.push("/");
  };

  return (
    <div className="task-details-bg">
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <h2 className="details-task-text">{tasks.name}</h2>
          <h3 className="details-task-text">{tasks.timeSpent}</h3>

          <NavLink  className="details-task-text" to={`/tasks/${tasks._id}/edit`}>Edit</NavLink>
          <button onClick={() => handleDeleteProject(tasks._id)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default TaskDetails;
