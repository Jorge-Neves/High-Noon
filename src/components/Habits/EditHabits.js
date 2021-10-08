import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./HabitEdit.css"
import NavBarHabits from "../Navbars/NavBarHabits";
import Footer from "../Navbars/Footer";

function EditHabit({ match }) {
  const [habit, setHabit] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function getHabit() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/habits/${match.params.id}`
      );

      setHabit(response.data);
    }
    getHabit();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      habit,
    };

    await axios.put(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/habits/${match.params.id}`,
      body
    );

    toast.success("habit updated", {
      position: "top-right",
      autoClose: 900,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    history.push("/habits");
  };

  return (
    <div className="habits-edit-bg row-vertical-habits">
        <div>
        <NavBarHabits />
      </div>
    
      <div className="signup-box">
            <h2>Edit Habit</h2>
            <form className="signup-form" onSubmit={handleFormSubmit}>
                  <label>Name</label>
                <input
                type="text"
                onChange={(e) => setHabit(e.target.value)}
                value={habit.name}
              />

              <button className="close-l button-l button-size1" type="submit">
                Update
              </button>
            </form>
     
    </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default EditHabit;
