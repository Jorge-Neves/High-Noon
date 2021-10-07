import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./SkillsAdd.css"
import Footer from "../Navbars/Footer";
import NavBarSkills from "../Navbars/NavBarSkills";

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
    toast.success("Skill created" , {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
  });
    history.push("/skills");
  };

  return (
    <div className="skill-list-bg row-vertical-skills ">
    <div>
      <NavBarSkills />
    </div>
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
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default AddSkill;
