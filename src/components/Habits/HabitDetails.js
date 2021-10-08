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
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/habits/${match.params.id}`
      );
      setHabits(response.data);
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
    history.push("/");
  };

  return (
    <div className="landing-bg row-vertical-habits">
        <div>
        <NavBarHabits />
      </div>
      <div className="row">
        <h2>{habits.name}</h2>
        <h3>{habits.timeSpent}</h3>

        <NavLink to={`/habits/${habits._id}/edit`}>Edit</NavLink>
        <button onClick={() => handleDeleteProject(habits._id)}>Delete</button>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default HabitDetails;
