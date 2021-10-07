import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { LoggedUserConsumer } from "../../context/loggedUser";
import "./HabitEdit.css"

function EditHabit({ match }) {
  const [habit, setHabit] = useState("");
  const [timeSpent, setTimeSpent] = useState("");
  const history = useHistory();

  useEffect(() => {
    async function getHabit() {
      const task = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/habits/${match.params.id}`
      );

      setHabit(habit.data.name);
      setTimeSpent(task.data.timeSpent);
    }
    getHabit();
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      habit,
      timeSpent,
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
    <div className="habits-edit-bg">
      <div className="row">
        <h2>Edit Habit</h2>
        <form onSubmit={handleFormSubmit}>
          <label>Name</label>
          <input
            type="text"
            onChange={(e) => setHabit(e.target.value)}
            value={habit}
          />

          <label>Edit dates</label>
          <input
            type="number"
            onChange={(e) => setTimeSpent(e.target.value)}
            value={timeSpent}
          />

          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditHabit;
