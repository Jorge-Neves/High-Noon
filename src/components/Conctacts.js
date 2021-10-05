import React from "react"
import { NavLink } from "react-router-dom";
import axios from "axios";



function Contacts(){
return(
    <>
    <article class="flow">
    <h1>Our Team</h1>
  <p>Hover or focus over each card to see the person’s job title slide in and the colour treatment change.</p>
  <div class="team">
  <ul class="auto-grid" role="list">
  <li>
        <NavLink exact to="/greg"  class="profile">
          <h2 class="profile__name">Gregory Marklew</h2>
          <p>Web Developer</p>
          <img alt="Gregory Marklew" src="/greg.png" />
        </NavLink>
      </li>
  
      <li>
      <NavLink exact to="/paulo"  class="profile">
          <h2 class="profile__name">Paulo Santos</h2>
          <p>Web Developer</p>
          <img alt="Paulo Santos" src="/paulo.png" />
        </NavLink>
      </li>
  </ul>
    </div>  
     
      </article>
      </>
)
}

export default Contacts


