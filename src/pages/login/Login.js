import React, { useState } from "react";
import logo from "../../images/logo.png";
import signupBirds from "../../images/signup-birds.png";
import signupGround from "../../images/signup-ground.png";
import googleG from "../../images/g.svg";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";

function Login() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);
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
            <div className="signup-form-wrapper mt-5">
              <h2 style={{ color: "#222" }} className="marginZero">
                Welcome!
              </h2>
              <h6 className="marginZero">Sign into your account</h6>
              <form action="" className="login-form">
                <div className="row">
                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        name="userName"
                        className="signup-box-input loginfields"
                        placeholder="Username"
                        id=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="password"
                        name="password"
                        className="signup-box-input loginfields"
                        placeholder="Password"
                        id=""
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper d-flex justify-content-center mb-3">
                      <Link href="#" className="text-center forgotPass">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="submit"
                        className="gray-button submit-btn w-100"
                        value="SIGN IN"
                      />
                      <p className="or-txt">or</p>
                      <p className="text-center mt-1">
                        Sign in with Social accounts
                      </p>
                      <div
                        className="d-flex mx-auto"
                        style={{ width: "fit-content" }}
                      >
                        <Link href="#" target="_blank">
                          <div className="social-icon-circle align-items-end">
                            <i className="fa fa-facebook-f"></i>
                          </div>
                        </Link>
                        <Link href="#" target="_blank">
                          <div
                            className="social-icon-circle"
                            style={{ backgroundColor: "whitesmoke" }}
                          >
                            <img src={googleG} alt="" />
                          </div>
                        </Link>
                        <Link href="#" target="_blank">
                          <div className="social-icon-circle">
                            <i className="fab fa-instagram"></i>
                          </div>
                        </Link>
                        <Link href="#" target="_blank">
                          <div className="social-icon-circle">
                            <i className="fa-brands fa-twitter"></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Login;
