import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./SkillsAdd.css"

function AddSkill() {
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

    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/skills`, body);
    toast.success("Skill created");
    history.push("/skills");
  };

  return (
    <div className="skills-add-bg">
      <div className="row">
        <h2>Add Skill</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <button type="submit">Create</button>
        </form>
      </div>
    </div>
  );
}

export default AddSkill;
