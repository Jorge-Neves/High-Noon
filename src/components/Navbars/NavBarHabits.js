import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./NavBarHabits.css"

function NavBarHabits({ loggedInUser, setCurrentLoggedInUser }) {
  const logoutUser = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
      withCredentials: true,
    });
    setCurrentLoggedInUser("");
  };

   return (
     <>
       <div className="navi container-fluid">
         <p>Welcome {loggedInUser.username}</p>
       </div>
       <nav className="navi container-fluid" >
           <div>
             <NavLink exact to="/">
               <button onClick={logoutUser}>Logout</button>
             </NavLink>
           </div>
        
           <div>
             <NavLink activeStyle={{ color: "red" }} exact to="/home">
               HomePage
             </NavLink>
           </div>
           <div>
             <NavLink activeStyle={{ color: "red" }} exact to="/tasks">
               Tasks
             </NavLink>
           </div>
           <div>
             <NavLink activeStyle={{ color: "red" }} to="/tasks/graphs">
               Tasks Stats
             </NavLink>
           </div>
           <div>
             <NavLink activeStyle={{ color: "red" }} to="/tasks/add">
               Add Tasks
             </NavLink>
           </div>
       </nav>
     </>
   ) 


 

   
  
}

export default NavBarHabits;