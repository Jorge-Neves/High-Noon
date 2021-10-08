import "./App.css";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
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
import Tour from "./components/Website Tour/Tour";
import AddTask from "./components/Tasks/AddTask";
import TaskGraphs from "./components/Tasks/TaskGraphs";
import TaskDetails from "./components/Tasks/TaskDetails";
import EditTask from "./components/Tasks/EditTask";
import Zen from "./components/Timer/Zen";
import Affirmations from "./components/Timer/Affirmations";
import TaskList from "./components/Tasks/TaskList";
import Contacts from "./components/Conctacts";
import Paulo from "./components/Paulo";
import Greg from "./components/Greg";
import SimpleBot from "./components/SimpleBot/Bot";
import ResourceCard from "./components/ResourceCards";
import SkillsList from "./components/Skills/SkillsList";
import HabitList from "./components/Habits/HabitsList";
import HabitGraphs from "./components/Habits/HabitGraphs"
import HabitDetails from "./components/Habits/HabitDetails";
import EditHabits from "./components/Habits/EditHabits";
import AddHabits from "./components/Habits/AddHabits";

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
      {/* <NavBar className
        loggedInUser={loggedInUser}
        setCurrentLoggedInUser={setCurrentLoggedInUser}
      /> */}
      <Switch>
      <Route
          exact
          path="/"
          render={() => {
            return <LandingPage 
            loggedInUser={loggedInUser}
            setCurrentLoggedInUser={setCurrentLoggedInUser} />;
          }} 
        />
        <Route exact path="/tasks" component={TaskList} />
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
        <Route exact path="/home" component={HomePage} /> 
        <Route exact path="/resources" component={ResourceCard} /> 
        <Route exact path="/tasks/add" component={AddTask} />
        <Route exact path="/tasks/graphs" component={TaskGraphs} />
        <Route exact path="/tasks/:id/edit" component={EditTask} />
        <Route exact path="/tasks/:id" component={TaskDetails} />
       
        <Route exact path="/skills" component={SkillsList} />
        <Route exact path="/skills/add" component={AddSkill} />
        <Route exact path="/skills/graphs" component={SkillGraphs} />
        <Route exact path="/skills/:id" component={SkillDetails} />
        <Route exact path="/skills/:id/edit" component={EditSkill} />
        <Route exact path="/user/stats" component={UserStats} />
        <Route exact path="/user" component={UserDetails} />
        <Route exact path="/affirmations" component={Affirmations} />
        <Route exact path="/zen" component={Zen} />
        <Route exact path="/tour" component={Tour} />
        <Route exact path="/simplebot" component={SimpleBot} />
        <Route exact path="/contacts" component={Contacts} />
        <Route exact path="/greg" component={Greg} />
        <Route exact path="/paulo" component={Paulo} />
        <Route exact path="/habits" component={HabitList} />
        
        <Route exact path="/habits/add" component={AddHabits} />
        <Route exact path="/habits/:id/graphs" component={HabitGraphs} />
        <Route exact path="/habits/:id/edit" component={EditHabits} />
        <Route exact path="/habits/:id" component={HabitDetails} />
    
        
       
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


