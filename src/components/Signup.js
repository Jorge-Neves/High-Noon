import React, { useState } from "react";
import { useHistory, NavLink } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "./Signup.css"
import NavBarLanding from "./Navbars/NavBarLanding";
import Footer from "./Navbars/Footer";

 function Signup({ setCurrentLoggedInUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameLogin, setUsernameLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");
  const history = useHistory();

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/login`,
        body,
        { withCredentials: true }
      );
      if (response.data.username) {
        toast.success("Signup success");
        console.log(response);
        setCurrentLoggedInUser(response.data); //Comes from the app component
        history.push("/tasks");
      }
    } catch (e) {
      toast.error("Invalid Signup");
    }
  };

  const changeSignupUsername = (e) => {
    e.cancelBubble = true;
    e.stopPropagation();
    setUsername(e.target.value);
  }

  
  const handleFormSubmitLogin = async (e) => {
    e.preventDefault();
    const username = usernameLogin
    const password = passwordLogin
    const body = {
      username,
      password,
    };
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_HOSTNAME}/login`,
        body,
        { withCredentials: true }
      );
      if (response.data.username) {
        toast.success("Login success");
        console.log(response);
        setCurrentLoggedInUser(response.data); //Comes from the app component
        history.push("/home");
      }
    } catch (e) {
      toast.error("Invalid login");
    }
  };

  return (
    <div className="signup-bg row-vertical-signup">
       <div className="row-signup">
                    <div>
                        <NavBarLanding />
                    </div>
            </div>
      <div className="row-signup">
      <div className="col-md-6 mx-auto p-0">
          <div className="card">
            
              <div className="login-box">
                  <div className="login-snip"> 
                  <input id="tab-1" type="radio" name="tab" className="sign-in" checked/>
                  <label for="tab-1" className="tab">Login</label> 
                  <input id="tab-2" type="radio" name="tab" className="sign-up"/>
                  <label for="tab-2" className="tab">Sign Up</label>
                      <div className="login-space">
                          <div className="login">
                          <form onSubmit={handleFormSubmitLogin}>
                              <div className="group"> 
                      
                                <label for="user" className="label">Username</label> 
                                <input 
                                id="user" 
                                type="text" 
                                className="input" 
                                onChange={changeSignupUsername}
                                value={usernameLogin}
                                /> 
                              </div>
                              <div className="group">
                                <label for="pass" className="label">Password</label> 
                                <input 
                                id="pass" 
                                type="password" 
                                className="input" 
                                data-type="password" 
                                onChange={(e) => setPasswordLogin(e.target.value)}
                                value={passwordLogin}
                                /> 
                                
                              </div>
                              
                              <div className="group"> 
                              <button type="submit" className="button">Sign In</button>
                        
                              </div>
                              </form>
                              <div className="hr">
                              </div>
                          </div>
                      
                        <form onSubmit={handleFormSubmit}>
                          <div className="sign-up-form">
                              <div className="group"> 
                                <label for="user" className="label">Username</label> 
                                <input 
                                id="user" 
                                type="text" 
                                className="input" 
                                onChange={(e) => setUsername(e.target.value)}
                                value={username}/>
                              </div>
                              <div className="group"> 
                                <label for="pass" className="label">Password</label> 
                                <input 
                                id="pass" 
                                type="password" 
                                className="input" 
                                data-type="password" 
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}/> 
                              </div>
                              <div className="group"> 
                                <input type="submit" className="button" value="Sign Up"/> 
                              </div>
                              <div className="hr"></div>
                              <div className="foot"> 
                                <label for="tab-1">Already Member?</label> 
                              </div>
                          </div>
                        </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <div className="row-signup">
                    <div>
                        <Footer />
                    </div>
            </div>
</div>
  );


}

 export default Signup;



