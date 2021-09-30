import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function AddTask({ loggedInUser }) {
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
    toast.success("Task created");
    history.push("/tasks");
  };

  return (
    <>
      <h2>Add Task</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />

        <button type="submit">Create</button>
      </form>
    </>
  );
}

export default AddTask;
