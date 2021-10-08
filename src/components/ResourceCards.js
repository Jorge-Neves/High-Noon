import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Resources.css";
import NavBarLanding from "./Navbars/NavBarLanding";

function ResourceCard() {
  
  return (
  <div>
  <div className="container-fluid">
    <NavBarLanding />
  </div>
  <div>
    <img src="/ContactsHeader.png" alt="people talking" />
    </div>
 
  <div className="container-fluid" >
  <div className="container">
    <div className="card">
      <div className="face face1">
        <div className="content">
          <img src="/reddit.png" />
          <h3>Reddit ADHD</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>
            A reddit forum for people with ADHD 
          </p>
          <a href="https://www.reddit.com/r/ADHD/" target="_blank">Read More</a>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="face face1">
        <div className="content">
          <img src="/worldorg.png" />
          <h3>ADHD Federation</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>
            A whordl wide organization to help people with ADHD and their families
          </p>
          <a href="https://www.adhd-federation.org/" target="_blank">Read More</a>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="face face1">
        <div className="content">
          <img src="/spada_logo_normal.png" />
          <h3>Portuguese ADHD association</h3>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <p>
          Portuguese ADHD association
          </p>
          <a href="https://spda.pt/" target="_blank">Read More</a>
        </div>
      </div>
    </div>
</div>
  </div>
  <div>
    <img src="/ContactsFooter.jpg" alt="people talking" />
    </div>
  </div>
  )
}

export default ResourceCard;
