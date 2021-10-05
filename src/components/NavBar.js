import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import"./NavBar.css"

function NavBar({ loggedInUser, setCurrentLoggedInUser }) {
  const logoutUser = async () => {
    await axios.post(`${process.env.REACT_APP_SERVER_HOSTNAME}/logout`, null, {
      withCredentials: true,
    });
    setCurrentLoggedInUser("");
  };

  // return loggedInUser ? (
  //   <>
  //     <div className="navi container-fluid">
  //       <p>Welcome {loggedInUser.username}</p>
  //     </div>
  //     <nav className="navi container-fluid" >
  //         <div>
  //           <NavLink exact to="/">
  //             <button onClick={logoutUser}>Logout</button>
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} exact to="/">
  //             Landing Page
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} exact to="/home">
  //             HomePage
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} exact to="/tasks">
  //             Tasks
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} to="/tasks/graphs">
  //             Tasks Stats
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} to="/tasks/add">
  //             Add Tasks
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} exact to="/skills">
  //             Skills
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} to="/skills/graphs">
  //             Skills Stats
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} to="/skills/add">
  //             Add Skills
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} to="/user">
  //             User Details
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} to="/user/stats">
  //             User Stats
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} to="/affirmations">
  //             Affirmations
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} to="/zen">
  //             Zen
  //           </NavLink>
  //         </div>
  //         <div>
  //           <NavLink activeStyle={{ color: "red" }} to="/contacts">
  //           Meet the Team
  //           </NavLink>
  //         </div>
  //     </nav>
  //   </>
  // ) : (
  //   <nav>
  //     <ul>
  //       <li>
  //         <NavLink activeStyle={{ color: "red" }} exact to="/">
  //           Landing Page
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink activeStyle={{ color: "red" }} exact to="/tasks">
  //           Tasks
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink activeStyle={{ color: "red" }} to="/signup">
  //           Signup
  //         </NavLink>
  //       </li>
  //       <li>
  //         <NavLink activeStyle={{ color: "red" }} to="/login">
  //           Login
  //         </NavLink>
        // </li>
        {/* GOOGLE_LOGIN */}
        {/* <li>
          <NavLink activeStyle={{ color: "red" }} exact to="/login-google">
            Login With Google
          </NavLink>
        </li>
        <
        <NavLink activeStyle={{ color: "red" }} exact to="/resources">
            Resources
          </NavLink>
        </li>
      </ul>
    </nav> */}
  // );

  return(
    <>
      <ul class="nav">
  <li>
    <a href="https://jasminegump.com" target = "_blank">
      <i class="fas fa-home fa-3x home">
        <div class = "circle"></div>
      </i>
      <div class = "title">Home</div>
    </a>
  </li>
  
  <li>
    <a href="https://twitter.com/ladyjellington" target = "_blank">
      <i class="fab fa-twitter fa-3x twitter">
        <div class = "circle"></div>
      </i>
      <div class = "title">Twitter</div>
    </a>
  </li>
  
  <li>
    <a href="https://codepen.io/ladyjellington" target = "_blank">
      <i class="fab fa-codepen fa-3x codepen">
        <div class = "circle"></div></i>
      <div class = "title">Codepen</div>
    </a>
  </li>
  
  <li>
    <a href="https://github.com/jasminegmp" target = "_blank">
        <i class="fab fa-github fa-3x github">
          <div class = "circle"></div></i>
        <div class = "title">Github</div>
      </a>
  </li>
  <div class="background"></div>

</ul>

    </>
  )
}

export default NavBar;
