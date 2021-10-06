import React from "react";
import "./Contacts.css"

function Paulo() {
  return (
    // <>
    //   <div className="container">
    //     <img src="/paulo.png" alt="dev Paulo" className="dev-img" />
    //     <a href="https://github.com/Jorge-Neves"  className="icons" > <img src="/github.png"/></a>
    //     <a href="www.linkedin.com/in/paulo-j-santos" className="icons"> <img   src="/linkedin.png"/>linkedin </a>
    // </div>
    // </>
    <>
      <div class="container-personal">
    
    <div class="card-wrapper-personal">
      
      <div class="card-personal">
        
        <div class="card-image-personal">
          <img src="/paulo.png" alt="Web dev Paulo"/>
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
        <h2>Paulo Santos
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
export default Paulo;
