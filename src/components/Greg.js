import React from "react";
import "./Contacts.css";
import "font-awesome/css/font-awesome.min.css";
import NavBarLanding from "./Navbars/NavBarLanding";
function Greg() {
  return (    
    <div className="row-vertical-contacts">
    <div>
    <NavBarLanding />
    </div>
    <div>
    <img src="/ContactsHeader.png" alt="people talking" />
    </div>
      <div className="container-personal">
        <div className="card-wrapper-personal">
          <div className="card-personal">
            <div className="card-image-personal">
              <img className="card-img-pers" src="/greg.png" alt="Web Dev Greg" />
            </div>

            <ul class="social-icons">
              <li>
                <a href="https://www.linkedin.com/in/gregory-marklew/" target="_blank">
                  <i className="fa fa-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="https://github.com/NoisyOgre" target="_blank">
                  <i className="fa fa-github"></i>
                </a>
              </li>
            </ul>
            <div className="details" >
              <h2>
                Gregory Marklew
                <br />
                <span className="job-title">Web Developer</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div>
    <img src="/ContactsFooter.jpg" alt="people talking" />
    </div>
    </div>
  );
}
export default Greg;
