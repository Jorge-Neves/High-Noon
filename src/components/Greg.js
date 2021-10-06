import React from "react";
import "./Contacts.css"

function Greg() {
  return (
    // <div className="container">
    //     <img src="/greg.png" alt="dev Greg" className="dev-img" />
    //     <a href="https://github.com/NoisyOgre"  className="icons" > <img src="/github.png"/></a>
    //     <a href="https://www.linkedin.com/in/gregory-marklew/" className="icons"> <img   src="/linkedin.png"/>linkedin </a>
    // </div>
    <>
      <div class="container-personal">
    
    <div class="card-wrapper-personal">
      
      <div class="card-personal">
        
        <div class="card-image-personal">
          <img src="/greg.png" alt="Web Dev Greg"/>
        </div>

      <ul class="social-icons">
        <li>
          <a href="">
            <i class="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-twitter"></i>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fab fa-dribbble"></i>
          </a>
        </li>
      </ul>

      <div class="details ">
        <h2>Gregory Marklew
          <br/>
          <span class="job-title">Web Developer</span>
        </h2>
      </div>
    </div>
  </div>
    
    

 </div>
    </>
  );
}
export default Greg;
