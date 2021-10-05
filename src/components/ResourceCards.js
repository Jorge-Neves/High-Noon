import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import "./Resources.css";

function ResourceCard() {
  
  return (
  <>
  <div class="container">
    <div class="card">
      <div class="face face1">
        <div class="content">
          <img src="/reddit.png" />
          <h3>Reddit ADHD</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p>
            A reddit forum for people with ADHD 
          </p>
          <a href="https://www.reddit.com/r/ADHD/" target="_blank">Read More</a>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="face face1">
        <div class="content">
          <img src="/worldorg.png" />
          <h3>ADHD Federation</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p>
            A whordl wide organization to help people with ADHD and their families
          </p>
          <a href="https://www.adhd-federation.org/" target="_blank">Read More</a>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="face face1">
        <div class="content">
          <img src="/public/spada_logo_normal.png" />
          <h3>Portuguese ADHD association</h3>
        </div>
      </div>
      <div class="face face2">
        <div class="content">
          <p>
          Portuguese ADHD association
          </p>
          <a href="https://spda.pt/" target="_blank">Read More</a>
        </div>
      </div>
    </div>
</div>
  </>
  )
}

export default ResourceCard;
