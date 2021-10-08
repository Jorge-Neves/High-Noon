import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./TaskDetails.css"
import NavBarTasks from "../Navbars/NavBarTasks";
import Footer from "../Navbars/Footer";

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
    toast.info("task deleted" , {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
    history.push("/");
  };

  return (
    <div className="task-list-bg row-vertical-tasks">
    <div>
      <NavBarTasks />
    </div>
      <div className="row">
        <div className="col-md-6 mx-auto p-0">
          <h2 className="details-task-text">{tasks.name}</h2>
          <h3 className="details-task-text">{tasks.timeSpent}</h3>

          <NavLink  className="details-task-text" to={`/tasks/${tasks._id}/edit`}>Edit</NavLink>
          <button onClick={() => handleDeleteProject(tasks._id)}>Delete</button>
        </div>
      </div>
       <div>
              <Footer />
            </div>
    </div>
  );
}

export default TaskDetails;
