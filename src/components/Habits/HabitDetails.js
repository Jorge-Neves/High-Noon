import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, NavLink } from "react-router-dom";
import { toast } from "react-toastify";
import { LoggedUserConsumer} from "../../context/loggedUser"

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
    await axios.delete(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/habits/${id}`
    );
    toast.info("Habit deleted");
    history.push("/");
  };

  return (
    <>
      <h2>{habits.name}</h2>
      <h3>{habits.timeSpent}</h3>
      

      <NavLink to={`/habits/${habits._id}/edit`}>Edit</NavLink>
      <button onClick={() => handleDeleteProject(habits._id)}>Delete</button>
    </>
  );
}

export default HabitDetails;
