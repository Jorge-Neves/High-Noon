import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

function Signup({loggedInUser, setCurrentLoggedInUser}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/signup`, body);
    toast.success("Signup success");
    // history.push("/login");
    const response = await axios.post(
      `${process.env.REACT_APP_SERVER_HOSTNAME}/login`,
      body,
      { withCredentials: true }
    );
    if (response.data.username) {
      toast.success("Login success");
      console.log(response);
      setCurrentLoggedInUser(response.data); //Comes from the app component
      history.push("/tasks");
    }
  };

  return (
    <>
      <h2>Signup</h2>
      <form onSubmit={handleFormSubmit}>
        <label>Username</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button type="submit">Signup</button>
      </form>
      Already have an account? Login <NavLink to="/login">here</NavLink>
    </>
  );
}

export default Signup;
