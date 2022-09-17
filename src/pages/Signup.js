import React, { useState , useEffect} from "react";
import logo from "../images/logo.png";
import signupBirds from "../images/signup-birds.png";
import signupGround from "../images/signup-ground.png";
import googleG from "../images/g.svg";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/Header/Header";
import { GoogleAuth ,FacebookAuth ,TwitterAuth} from "../firebase/authentication";

function Signup() {

  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);


  /// input handlers and form submitter ///
  
  const [firstName , setFristName] = useState("")
  const [lastName , setLastName] = useState("")
  const [email , setEmail] = useState("")
  const [userName , setUserName] = useState("")
  const [ password , setPassword] = useState("")
  const [affiliation , setAffiliation] = useState("")
  const [backendStatus , setBackendStatus] = useState(false);

  const submit  = (event) => {
      event.preventDefault();
      console.log("here")
      asyncCall();
  };

  ///  backend call        ///
  
  const asyncCall = async ()  =>{
     const url = "http://127.0.0.1:8000/user/signup";
      
      const data = {
        "first_name":firstName,
        "last_name" : lastName,
        "email" : email,
        "username" : userName,
        "password" : password,
        "status" : "1"
      };
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

      const response = await fetch(url,requestOptions);
      const responseData = await response.json();
      if (responseData.error === false) {
        setBackendStatus(true);
      }
      console.log(responseData);
  }


  // /// effect manipulation ///
  useEffect ( () =>{
    if (backendStatus === true){
      console.log("USER CREATED SUCCESFULLY")
    }
   
  })

  /// toggle handlers /// 

  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }

  return (
    <div>
      <div className="mobile-header-section">
        <div
          id="nav-icon4"
          className={!sideBar ? "hamburger" : "hamburger open"}
          onClick={handleSideBar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={logo} style={{ height: "60px" }} alt="" />
        <div
          id="nav-icon3"
          onClick={handleHeader}
          className={!header ? "hamburger" : "hamburger open"}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="signup-section-wrapper">
        <Sidebar sideBar={sideBar} />

        <div className="signup-inner-parent">
          <Header header={header} />

          <div className="signup-form-main-area">
            <div className="signup-form-wrapper">
              <h1 className="site-heading">Create an Account</h1>
              <p className="BluetextUnderHeading">
                Already have an account? &nbsp;
                <Link to="#" className="login-link">
                  Login
                </Link>
              </p>
              <form action="" onSubmit={submit}>
                <div className="row">
                  <div className="col-lg-6 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        name="firstName"
                        className="signup-box-input"
                        placeholder="First Name"
                        id=""
                        onChange={(e)=>{setFristName(e.target.value)}}
                      />
                    </div>
                  </div>
                  {/* <!-- col 6 --> */}
                  <div className="col-lg-6 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        name="lastName"
                        className="signup-box-input"
                        placeholder="Last Name"
                        id=""
                        onChange={(event)=>{setLastName(event.target.value)}}
                      />
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 6 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        name="userName"
                        className="signup-box-input"
                        placeholder="User Name"
                        id=""
                        onChange={(event)=>{setUserName(event.target.value)}}
                      />
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        name="email"
                        className="signup-box-input"
                        placeholder="Email Address"
                        id=""
                        onChange={((event)=>{setEmail(event.target.value)})}
                      />
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        name="password"
                        className="signup-box-input"
                        placeholder="Password"
                        id=""
                        onChange={(event)=>{setPassword(event.target.value)}}
                      />
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <select name="" id="" onChange={(event)=>{setAffiliation(event.target.value)}}>
                        <option value="">Select Affiliation</option>
                        <option value="">Patients</option>
                        <option value="">Care taker</option>
                      </select>
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-4">
                      <input type="checkbox" name="checkbox" />
                      <label>
                        I have read and agree to the terms and conditions
                      </label>
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="submit"
                        className="gray-button submit-btn"
                        value="SIGN UP"
                      />
                      <p className="text-center mt-1">
                        Sign up with Social accounts
                      </p>
                      <div
                        className="d-flex mx-auto"
                        style={{ width: "fit-content" }}
                      >
                        <Link to="#" target="_blank">
                          <div className="social-icon-circle align-items-end" onClick={FacebookAuth}>
                            <i className="fa fa-facebook-f"></i>
                          </div>
                          {/* <!-- social-icon-circle --> */}
                        </Link>
                        <Link to="#" target="_blank">
                          <div
                            className="social-icon-circle"
                            style={{ backgroundColor: "whitesmoke" }}
                          >
                            <img src={googleG} alt=""  onClick={GoogleAuth}/>
                          </div>
                          {/* <!-- social-icon-circle --> */}
                        </Link>
                        <Link to="#" target="_blank">
                          <div className="social-icon-circle">
                            <i className="fab fa-instagram"></i>
                          </div>
                          {/* <!-- social-icon-circle --> */}
                        </Link>
                        <Link to="#" target="_blank">
                          <div className="social-icon-circle" onClick={TwitterAuth}>
                            <i className="fa-brands fa-twitter"></i>
                          </div>
                          {/* <!-- social-icon-circle --> */}
                        </Link>
                      </div>
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 12 --> */}
                </div>
                {/* <!-- row --> */}
              </form>
            </div>
          </div>
        </div>
        <img src={signupBirds} className="signup-birds hideInMobile" alt="" />
        <img src={signupGround} className="signup-ground hideInMobile" alt="" />
      </div>
    </div>
  );
}

export default Signup;
