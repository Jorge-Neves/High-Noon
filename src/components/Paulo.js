import React from "react";
import "./Contacts.css";

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
              <img card-img-pers src="/paulo.png" alt="Web Dev Paulo" />
            </div>

            <ul class="social-icons">
            <li>
            <a href="https://linkedin.com/in/paulo-j-santos" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/Jorge-Neves" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
            <div class="details ">
              <h2>
                Paulo Santos
                <br />
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
