import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./EditTask.css"
import NavBarTasks from "../Navbars/NavBarTasks";
import Footer from "../Navbars/Footer";

function EditTask({ match }) {
  const [name, setName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function getTask() {
      const task = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/tasks/${match.params.id}`
      );

      setName(task.data.name);
      setTimeSpent(task.data.timeSpent);
    }
    getTask();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      timeSpent,
    };

    await axios.put(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/tasks/${match.params.id}`,
      body
    );

    toast.success("Task updated" , {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
    history.push("/tasks");
  };

  return (
    <div className="task-list-bg row-vertical-tasks">
    <div>
      <NavBarTasks />
    </div>
     
      <div className="signup-box">
            <h2>Edit Task</h2>
            <form className="signup-form" onSubmit={handleFormSubmit}>
                  <label>Name</label>
                <input
                type="text"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
                <label>Time Spent</label>
                <input
                 type="number"
               onChange={(e) => setTimeSpent(e.target.value)}
               value={timeSpent}
              />

              <button className="close-l button-l button-size1" type="submit">
                Update
              </button>
            </form>
     
    </div>
      <div>
              <Footer />
            </div>
    </div>
  );
}

export default EditTask;
