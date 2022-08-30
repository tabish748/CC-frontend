import { Link } from "react-router-dom";
import logo from "./logo.svg";
import React from 'react';

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <>
      <div className="mobile-header-section">
        <div id="nav-icon4" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <img src={logo} style={{height: "60px"}} alt="" />
        <div id="nav-icon3" className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="signup-section-wrapper">
        <div className="sidebar-section hideInLeftInMobile">
          <div className="logo-wrapper hideInMobile">
            <img src={logo} alt="" />
          </div>

          <div className="sidebar-list-area">
            <ul>
              <li>
                <Link to="#">
                  <div className="sidebar-list-bullet"></div>
                  Clinincal Trial Finder
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div
                    className="sidebar-list-bullet"
                    style={{backgroundColor: "#bde7fb"}}
                  ></div>
                  Cancer Clarity Treatment Guide
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div
                    className="sidebar-list-bullet"
                    style={{backgroundColor: "#008dd0"}}
                  ></div>
                  Pharmaceutical Consulting
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div className="sidebar-list-bullet"></div>
                  Cancer Center Consulting
                </Link>
              </li>
              <li>
                <Link to="#">
                  <div
                    className="sidebar-list-bullet"
                    style={{backgroundColor: "#00dea9"}}
                  ></div>
                  My Profile
                </Link>
              </li>
            </ul>

            <h6 className="px-3 mt-4" style={{fontWeight: "600"}}>
              Sister Sites
            </h6>

            <ul>
              <li style={{borderTop: "1px solid #707070", padding: "0"}}>
                <Link to="#">
                  <div className="sidebar-list-bullet-img">
                    <img src={logo} alt="" />
                  </div>
                  CancerLight
                </Link>
              </li>
              <li style={{padding: "0"}}>
                <Link to="#">
                  <div className="sidebar-list-bullet-img">
                    <img src={logo} alt="" />
                  </div>
                  Revolution Cancer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="signup-inner-parent">
          <div className="signup-header-area headerHideinMobile">
            <div className="signup-header-content-wrapper">
              <div className="d-flex align-items-center">
                <div className="content-wrapper w-auto h-auto">
                  <i className="fas fa-user" style={{marginRight: "5px"}}></i>
                  <Link
                    to="#"
                    className="registration-links"
                    style={{marginRight: "4px"}}
                  >
                    SIGN IN
                  </Link>
                  <span style={{color: "#707070"}}>|</span>
                  &nbsp;
                  <Link to="#" className="registration-links">
                    SIGN UP
                  </Link>
                </div>
              </div>
              <div>
                <input type="search" className="search-box" placeholder="SEARCH" />
              </div>
              <div className="d-flex align-items-center">
                <div className="content-wrapper px-2">
                  <Link to="" className="gray-button">
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <div className="content-wrapper">
                  <Link to="" className="gray-button">
                    About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="signup-form-main-area">
            <div className="signup-form-wrapper">
              <h2>Create an Account</h2>
              <h6>
                Already have an account?
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
                      <div className="d-flex mx-auto" style={{width: "fit-content"}}>
                        <Link to="#" target="_blank">
                          <div className="social-icon-circle align-items-end">
                            <i className="fab fa-facebook-f"></i>
                          </div>
                          {/* <!-- social-icon-circle --> */}
                        </Link>
                        <Link to="#" target="_blank">
                          <div
                            className="social-icon-circle"
                            style={{backgroundColor: "whitesmoke"}}
                          >
                            <img src={logo} alt="" />
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
        <img
          src={logo}
          className="signup-birds hideInMobile"
          alt=""
        />
        <img
          src={logo}
          className="signup-ground hideInMobile"
          alt=""
        />
      </div>
    </>
  );
}

export default App;
