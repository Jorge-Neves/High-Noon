import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./SkillsList.css";

function SkillsList() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function getAllSkills() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/skills`,
        { withCredentials: true }
      );
      setSkills(response.data);
    }
    getAllSkills();
  }, []);

  return (
    <div className="skill-list-bg">
      <div className="row">
        <ul>
          {skills.map((skill) => {
            return (
              <li key={skill._id}>
                <NavLink to={`/skills/${skill._id}`}>{skill.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SkillsList;
