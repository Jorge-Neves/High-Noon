import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./components/HomePage";
import LandingPage from "./components/LandingPage";
import UserStats from "./components/UserStats";
import UserDetails from "./components/UserDetails";
import { LoggedUserProvider } from "./context/loggedUser";
import PrivateRoute from "./components/PrivateRoute";
import EditSkill from "./components/Skills/EditSkill";
import SkillDetails from "./components/Skills/SkillDetails";
import SkillGraphs from "./components/Skills/SkillGraphs";
import AddSkill from "./components/Skills/AddSkill";
import Resources from "./components/Resources/Resources";
import Tour from "./components/Website Tour/Tour";
import AddTask from "./components/Tasks/AddTask";
import TaskGraphs from "./components/Tasks/TaskGraphs";
import TaskDetails from "./components/Tasks/TaskDetails";
import EditTask from "./components/Tasks/EditTask";
import Zen from "./components/Timer/Zen";
import Affirmations from "./components/Timer/Affirmations";
import TaskList from "./components/Tasks/TaskList";
import "./components/NavBar.css"
import Contacts from "./components/Conctacts";
import Paulo from "./components/Paulo";
import Greg from "./components/Greg";
import SimpleBot from "./components/SimpleBot/Resources";


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
      <LoggedUserProvider value={loggedInUser}>
      <NavBar className
        loggedInUser={loggedInUser}
        setCurrentLoggedInUser={setCurrentLoggedInUser}
      />
      <Switch>
        <PrivateRoute exact path="/tasks" component={TaskList} />
        <Route exact path="/signup" render={() => {
              return <Signup 
              loggedInUser={loggedInUser}
              setCurrentLoggedInUser={setCurrentLoggedInUser} />;
            }} /> 

        <Route
          path="/Login"
          render={() => {
            return <Login setCurrentLoggedInUser={setCurrentLoggedInUser} />;
          }} 
        />
        <PrivateRoute exact path="/home" component={HomePage} /> 
        <Route exact path="/" component={LandingPage} /> 

        <PrivateRoute exact path="/tasks/add" component={AddTask} />
        <PrivateRoute exact path="/tasks/graphs" component={TaskGraphs} />
        <PrivateRoute exact path="/tasks/:id" component={TaskDetails} />
        <PrivateRoute exact path="/tasks/:id/edit" component={EditTask} />
        <PrivateRoute exact path="/skills/add" component={AddSkill} />
        <PrivateRoute exact path="/skills/graphs" component={SkillGraphs} />
        <PrivateRoute exact path="/skills/:id" component={SkillDetails} />
        <PrivateRoute exact path="/skills/:id/edit" component={EditSkill} />
        <PrivateRoute exact path="/user/stats" component={UserStats} />
        <PrivateRoute exact path="/user" component={UserDetails} />
        <PrivateRoute exact path="/affirmations" component={Affirmations} />
        <PrivateRoute exact path="/zen" component={Zen} />
        <PrivateRoute exact path="/resources" component={Resources} />
        <PrivateRoute exact path="/tour" component={Tour} />
        <PrivateRoute exact path="/simplebot" component={SimpleBot} />
        <PrivateRoute exact path="/contacts" component={Contacts} />
        <PrivateRoute exact path="/greg" component={Greg} />
        <PrivateRoute exact path="/paulo" component={Paulo} />

        {/* GOOGLE_LOGIN */}
        <Route exact path="/login-google" render={
            () => {
              window.location.href = 
              `${process.env.REACT_APP_SERVER_HOSTNAME}/auth/google`
            }
          }/>
      </Switch>
      </LoggedUserProvider>
    </div>
  );  
}

export default App;


