import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./HabitsAdd.css"
import Footer from "../Navbars/Footer";
import NavBarHabits from "../Navbars/NavBarHabits";

function AddHabit() {
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

    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/habits`, body);
    toast.success("Habit created");
    history.push("/habits");
  };

  return (
    <div className="habits-add-bg row-vertical-habits">
      <div>
        <NavBarHabits />
      </div>
      <div className="row">
        <h2>Add Habit</h2>
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

export default AddHabit;
