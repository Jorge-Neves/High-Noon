import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./SkillsDetails.css";
import Footer from "../Navbars/Footer";
import NavBarSkills from "../Navbars/NavBarSkills";

function SkillDetails({ match }) {
  const [skills, setSkills] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function getSkillDetails() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/skills/${match.params.id}`
      );
      setSkills(response.data);
    }
    getSkillDetails();
  }, []);

  const handleDeleteProject = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_HOSTNAME}/skills/${id}`);
    toast.info("Skill deleted" , {
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
        <h2 className="details-task-text">{skills.name}</h2>
        <h3 className="details-task-text">{skills.timeSpent} Pomodoros</h3>
        <div className="row-horizontal-habits-buttons">
              <div>
                <button className="close-l button-l button-size1" ><NavLink to={`/skills/${skills._id}/edit`}>Edit</NavLink></button>
              </div>
              <div>
              <button  className="close-l button-l button-size1" onClick={() => handleDeleteProject(skills._id)}>Delete</button>
              </div>
        </div>
        
        
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default SkillDetails;
