import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { LoggedUserConsumer} from "../../context/loggedUser"

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
    await axios.delete(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/tasks/${id}`
    );
    toast.info("task deleted");
    history.push("/");
  };

  return (
    <>
      <h2>{tasks.name}</h2>
      <h3>{tasks.timeSpent}</h3>
      

      <NavLink to={`/tasks/${tasks._id}/edit`}>Edit</NavLink>
      <button onClick={() => handleDeleteProject(tasks._id)}>Delete</button>
    </>
  );
}

export default TaskDetails;
