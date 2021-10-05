import React from "react";
import "./Contacts.css"

function Greg() {
  return (
    <div className="container">
        <img src="/greg.png" alt="dev Greg" className="dev-img" />
        <a href="https://github.com/NoisyOgre"  className="icons" > <img src="/github.png"/></a>
        <a href="https://www.linkedin.com/in/gregory-marklew/" className="icons"> <img   src="/linkedin.png"/>linkedin </a>
    </div>
  );
}
export default Greg;
