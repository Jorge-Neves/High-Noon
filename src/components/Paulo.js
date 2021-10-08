import React from "react";
import "./Contacts.css";
import NavBarLanding from "./Navbars/NavBarLanding";
function Paulo() {
  return (
    <div className="row-vertical-contacts">
    <div>
    <NavBarLanding />
    </div>
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
      <div>
    <img src="/ContactsHeader" alt="people talking" />
    </div>
    </div>
  );
}
export default Paulo;
