import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./AddTask.css";
import NavBarTasks from "../Navbars/NavBarTasks";
import Footer from "../Navbars/Footer";

function AddTask() {
  const loggedInUser = useContext(LoggedUserConsumer);
  const [name, setName] = useState("");

  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const body = {
      name,
      timeSpent: 1,
      user: loggedInUser,
    };

    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/tasks`, body);
    toast.success("Task created" , {
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
      <h2>Add Task</h2>
      <form className="signup-form" onSubmit={handleFormSubmit}>
      <label>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

        <button className="close-l button-l button-size1" type="submit">
          Create
        </button>
      </form>
     
    </div>
      <div>
              <Footer />
            </div>
    </div>
  );
}

export default AddTask;
