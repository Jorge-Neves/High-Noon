import React from "react"
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Contacts.css"
import NavBarLanding from "./Navbars/NavBarLanding";

function Contacts(){
return(
<div className="row-vertical-contacts">
    <div>
    <NavBarLanding />
    </div>
    <div>
    <img src="/ContactsHeader" alt="people talking" />
    </div>
    <div className="contacts">
    <article className="flow">
  <div className="team">
  <ul className="auto-grid" role="list">
  <li>
        <NavLink exact to="/greg"  className="profile">
          <h2 className="profile__name">Gregory Marklew</h2>
          <p>Web Developer</p>
          <img alt="Gregory Marklew" src="/greg.png" />
        </NavLink>
      </li>
  
      <li>
      <NavLink exact to="/paulo"  className="profile">
          <h2 className="profile__name">Paulo Santos</h2>
          <p>Web Developer</p>
          <img alt="Paulo Santos" src="/paulo.png" />
        </NavLink>
      </li>
  </ul>
    </div>  
     
      </article>
      </div>
      <div>
    <img src="/ContactsHeader" alt="people talking" />
    </div>
</div>
)

}

export default Contacts


