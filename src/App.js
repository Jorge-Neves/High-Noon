import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import TaskList from "./components/TaskList";
import AddTask from "./components/AddTask";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [loggedInUser, setCurrentLoggedInUser] = useState("");

  useEffect(() => {
    async function checkLoggedIn() {
      const response = await axios.get(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/isloggedin`,
        { withCredentials: true }
      );
      if (response.data.username) {
        setCurrentLoggedInUser(response.data);
      }
    }
    checkLoggedIn();
  }, []);

  return (
    <div className="App">
      <ToastContainer />
      <NavBar
        loggedInUser={loggedInUser}
        setCurrentLoggedInUser={setCurrentLoggedInUser}
      />
      <Switch>
        <Route
          path="/tasks/add"
          render={() => {
            return <AddTask loggedInUser={loggedInUser} />;
          }}
        />
        <Route exact path="/tasks" component={TaskList} />
        <Route exact path="/signup" component={Signup} />

        <Route
          path="/Login"
          render={() => {
            return <Login setCurrentLoggedInUser={setCurrentLoggedInUser} />;
          }}
        />
      </Switch>
    </div>
  );
}

export default App;
