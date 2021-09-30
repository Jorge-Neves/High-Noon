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
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import TaskDetails from "./components/TaskDetails";
import TaskGraphs from "./components/TaskGraphs";
import UserStats from "./components/UserStats";
import UserDetails from "./components/UserDetails";
import Affirmations from "./components/Affirmations";
import Zen from "./components/Zen";

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
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/tasks" component={TaskList} />
        <Route exact path="/tasks/add" component={AddTask} />
        <Route exact path="/tasks/graphs" component={TaskGraphs} />
        <Route exact path="/tasks/:id" component={TaskDetails} />
        <Route exact path="/user/stats" component={UserStats} />
        <Route exact path="/user" component={UserDetails} />
        <Route exact path="/home" component={HomePage} />
        <Route exact path="/affirmations" component={Affirmations} />
        <Route exact path="/zen" component={Zen} />
      </Switch>
    </div>
  );
}

export default App;
