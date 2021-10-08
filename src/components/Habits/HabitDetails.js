import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./HabitDetails.css"
import NavBarHabits from "../Navbars/NavBarHabits";
import Footer from "../Navbars/Footer";

function HabitDetails({ match }) {
  const [habits, setHabits] = useState({});
  const history = useHistory();

  useEffect(() => {
    async function getHabitDetails() {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_HOSTNAME}/habits/${match.params.id}`);
      setHabits(response.data);
      console.log(response.data)
    }
    getHabitDetails();
  }, []);

  const handleDeleteProject = async (id) => {
    await axios.delete(`${process.env.REACT_APP_SERVER_HOSTNAME}/habits/${id}`);
    toast.info("Habit deleted" , {
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

  const handleHabit= async (id) => {
    await axios.put(`${process.env.REACT_APP_SERVER_HOSTNAME}/habits/${id}/success/`);
    toast.info("Habit Unmarked" , {
      position: "top-right",
      autoClose: 900,
      
  });
   
  };

  const handleHabitDelete= async (id) => {
    await axios.put(`${process.env.REACT_APP_SERVER_HOSTNAME}/habits/${id}/miss/`);
    toast.info("Habit marked" , {
      position: "top-right",
      autoClose: 900,
      
  });
   
  };

  return (
    <div className="habits-details-bg row-vertical-habits">
        <div>
        <NavBarHabits />
      </div>
      <div className="row">
        <h2>{habits.name}</h2>
        <ul>
          {habits.date && habits.date.map((e, i) => {
            return (
              <li key={i}>
              {e}
              </li>
              );
          })}
          
        </ul>
        {/* <h3>{habits.date}</h3> */}

        
      </div>
      
      <div className="row-horizontal-habits-buttons">
        <div>
          <button className="close-l button-l button-size1" onClick={() => handleHabit(habits._id)}>Success</button>
        </div>
        <div>
          <button className="close-l button-l button-size1" onClick={() => handleHabitDelete(habits._id)}>Failed</button>
        </div>
        <div>
          <button className="close-l button-l button-size1" onClick={() => handleDeleteProject(habits._id)}>Delete</button>
        </div>
      </div>
      <div className="row-horizontal-habits-buttons">
        <div>
          <button className="close-l button-l button-size1"> <NavLink to={`/habits/${habits._id}/edit`}>Edit</NavLink></button>
        </div>
        <div>
          <button className="close-l button-l button-size1"><NavLink to={`/habits/${habits._id}/graphs`}>Stats</NavLink></button>
        </div>
      </div>
      <div>
        <Footer />
        </div>
    </div>
  );
}

export default HabitDetails;
