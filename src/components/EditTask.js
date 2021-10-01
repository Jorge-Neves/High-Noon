import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { LoggedUserConsumer} from "../context/loggedUser"

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

    toast.success("Task updated");
    history.push("/tasks");
  };

  return (
    <>
      <h2>Edit Task</h2>
      <form onSubmit={handleFormSubmit}>
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

        <button type="submit">Update</button>
      </form>
    </>
  );
}

export default EditTask;
