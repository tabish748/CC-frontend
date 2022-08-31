import React, { useState } from "react";
import logo from "../images/logo.png";
import signupBirds from "../images/signup-birds.png";
import signupGround from "../images/signup-ground.png";
import googleG from "../images/g.svg";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/Header/Header";

function Signup() {

  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }
  console.log(header);
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
              <h2>Create an Account</h2>
              <h6>
                Already have an account? &nbsp;
                <Link to="#" className="login-link">
                  Login
                </Link>
              </h6>
              <form action="">
                <div className="row">
                  <div className="col-lg-6 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        name="firstName"
                        className="signup-box-input"
                        placeholder="First Name"
                        id=""
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
                      />
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <select name="" id="">
                        <option value="">Select Affiliation</option>
                        <option value="">1</option>
                        <option value="">2</option>
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
                          <div className="social-icon-circle align-items-end">
                            <i className="fa fa-facebook-f"></i>
                          </div>
                          {/* <!-- social-icon-circle --> */}
                        </Link>
                        <Link to="#" target="_blank">
                          <div
                            className="social-icon-circle"
                            style={{ backgroundColor: "whitesmoke" }}
                          >
                            <img src={googleG} alt="" />
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
                          <div className="social-icon-circle">
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
