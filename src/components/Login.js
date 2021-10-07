import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import "./Login.css"
import NavBarLanding from "./Navbars/NavBarLanding";
import Footer from "./Navbars/Footer";
import { toast, Slide, Zoom, Flip, Bounce } from "react-toastify";
import { style } from "react-toastify";

function Login({ setCurrentLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/login`,
        body,
        { withCredentials: true }
      );
      if (response.data.username) {
        toast.success("Login success", {
          position: "top-right",
          autoClose: 900,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
      })

        console.log(response);
        setCurrentLoggedInUser(response.data); //Comes from the app component
        history.push("/home");
      }
    } catch (e) {
      toast.error("Invalid login" , {
        position: "top-right",
        autoClose: 900,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    })
    }
  };

  return (
    <div className="signup-bg row-vertical-signup ">
      <div>
        <NavBarLanding />
      </div>
      <div>
      <h2>Login</h2>
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

        <button className="close-l button-l" type="submit">Login</button>
      </form>
      Don't have an account? Register <NavLink to="/signup"><button className="close-l button-l" type="submit">Here</button></NavLink>
    </div>
    <div>
        <Footer />
      </div>
    </div>
  );
}

export default Login;
