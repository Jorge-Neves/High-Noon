import React, { useState, useEffect } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./HabitsList.css"

function HabitsList() {
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    async function getAllHabits() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/habits`,
        { withCredentials: true }
      );
      setHabits(response.data);
    }
    getAllHabits();
  }, []);

  return (
    <div className="habits-list-bg">
      <div className="row">
        <ul>
          {habits.map((habit) => {
            return (
              <li key={habit._id}>
                <NavLink to={`/habits/${habit._id}`}>{habit.name}</NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default HabitsList;
