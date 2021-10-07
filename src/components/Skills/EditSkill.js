import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./SkillsEdit.css";
import Footer from "../Navbars/Footer";
import NavBarSkills from "../Navbars/NavBarSkills";

function EditSkill({ match }) {
  const [name, setName] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function getSkill() {
      const skill = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/skills/${match.params.id}`
      );

      setName(skill.data.name);
      setTimeSpent(skill.data.timeSpent);
    }
    getSkill();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      timeSpent,
    };

    await axios.put(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/skills/${match.params.id}`,
      body
    );

    toast.success("Skill updated" , {
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
        <h2>Edit Skill</h2>
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default EditSkill;
