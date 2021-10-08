import React, { useState, useEffect } from "react";
import { Doughnut } from "react-chartjs-2";
import axios from "axios";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./SkillsGraphs.css"
import Footer from "../Navbars/Footer";
import NavBarSkills from "../Navbars/NavBarSkills";

function SkillGraphs() {
  const [skillNames, setSkillNames] = useState([]);
  const [skillTimes, setSkillTimes] = useState([]);

  useEffect(() => {
    async function getUserSkillNames() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/s/graphs/names`,
        { withCredentials: true }
      );
      const names = response.data;
      const namesArray = names.map((name) => {
        return [`${name.name}`];
      });
      const numbers = response.data;
      const numberssArray = names.map((name) => {
        return [name.timeSpent];
      });

      setSkillNames(namesArray);

      setSkillTimes(numberssArray);
    }
    getUserSkillNames();
  }, []);

  const data = {
    labels: skillNames,
    datasets: [
      {
        label: "Progress",
        data: skillTimes,
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="row-vertical-skills ">
      <div>
        <NavBarSkills />
      </div>
        <div className="skills-top-h1-margin">
           <h1> Skills Doughnut Graph </h1>
        </div>
            <div>
                 <img src="/GraphsHeader.jpg" alt="people talking" />
            </div>

        <div>
          <Doughnut data={data} />
        </div>
        
        <div className="skills-top-h1-margin">
          <h1> Keep up the good work! </h1>
        </div>
        <div>
          <Footer />
        </div>
    </div>
  );
}

export default SkillGraphs;
