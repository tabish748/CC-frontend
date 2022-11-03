import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import signupBirds from "../images/signup-birds.png";
import signupGround from "../images/signup-ground.png";
import Swal from "sweetalert2";

import googleG from "../images/g.svg";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/Header/Header";
import {
  GoogleAuth,
  FacebookAuth,
  TwitterAuth,
} from "../firebase/authentication";
import DatePicker from "react-date-picker";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signupAction } from "../redux/slices/userSignup";
import axios from "axios";
import Loader from "../components/Loader/Loader";
function Signup() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  /// input handlers and form submitter ///

  const [firstName, setFristName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [affiliation, setAffiliation] = useState("");
  const [date, onChangeDate] = useState(new Date());
  const [gender, setGender] = useState("");
  const [showEyeIcon, setShowEyeIcon] = useState(false);
  const [showEyeIconConfirm, setShowEyeIconConfirm] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [emailCheck, setEmailCheck] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState(false);
  const [loading, setLoading] = useState(false);

  const dispatch = new useDispatch();
  const response = useSelector((state) => state.userReg);

  const submit = (event) => {
    event.preventDefault();
    const firstNameEl = document.querySelector("#firstName");
    const lastNameEl = document.querySelector("#lastName");
    const emailEl = document.querySelector("#email");
    const passwordEl = document.querySelector("#password");
    const genderEl = document.querySelector("#gender");
    const affiliationEl = document.querySelector("#affiliation");

    const test = checkRequired([
      firstNameEl,
      lastNameEl,
      emailEl,
      passwordEl,
      genderEl,
      affiliationEl,
    ]);

    setTimeout(() => {
      console.log(test);
      if (test === true && emailCheck === true) {
        setLoading(true);
        const data = {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
          status: "1",
          user_type: affiliation,
          date_of_birth: date,
          gender: gender,
          confirm_password : confirmPassword,
        };

        dispatch(signupAction(data))
          .unwrap()
          .then((promiseResult) => {
            if (promiseResult.error === false) {
              setLoading(false);
              Swal.fire({
                title: "Sucessful!",
                text: promiseResult.message,
                icon: "success",
                confirmButtonText: "Cool",
              });
            } else {
              setLoading(false);
              Swal.fire({
                title: "Error!",
                text: promiseResult.message,
                icon: "error",
                confirmButtonText: "Try again",
              });
            }
          })
          .catch((serverRejection) => {
            setLoading(false);
            Swal.fire({
              title: "Error!",
              text: serverRejection.message,
              icon: "error",
              confirmButtonText: "ok",
            });
          });
      } else {
        console.log("both false");
      }
    }, 100);

    // event.preventDefault();
  };

  function checkRequired(inputArray) {
    const result = inputArray.map((input) => {
      if (input.value === "") {
        showError(input, "Required");
        return false;
      } else {
        return true;
      }
    });
    if (
      result[0] &&
      result[1] &&
      result[2] &&
      result[3] &&
      result[4] &&
      result[5]
    )
      return true;
    else return false;
  }

  function showError(input, message) {
    const parent = input.parentElement;
    parent.classList.add("error");
    parent.querySelector(".error-container").innerText = message;
  }
  function showSuccess(input) {
    const parent = input.parentElement;
    parent.classList.remove("error");
  }

  function validateEmail(email) {
    const emailBox = document.querySelector("#email");
    const emailRegex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email !== "") {
      if (emailRegex.test(email.trim())) {
        showSuccess(emailBox);
        setEmailCheck(true);
        return true;
      } else {
        showError(emailBox, "Invalid Email");
        setEmailCheck(false);
        return false;
      }
    }
  }

  function setFocus(type) {
    var element = document.activeElement;
    if (type === "true") element.parentNode.classList.remove("error");
  }
  useEffect(() => {
    validateEmail(email);
  }, [email]);
  useEffect(() => {
    if (password !== "") {
      setShowEyeIcon(true);
    } else {
      setShowEyeIcon(false);
    }
  }, [password]);

  useEffect(() => {
    if (confirmPassword !== "") {
      setShowEyeIconConfirm(true);
    } else {
      setShowEyeIconConfirm(false);
    }
    if (password !== "") {
      if (confirmPassword !== password) {
        document.querySelector("#error-container").innerText =
          "password does not match";
      } else {
        document.querySelector("#error-container").innerText = "password match";
      }
    }
  }, [confirmPassword]);

  ///  backend call        ///

  // /// effect manipulation ///
  useEffect(() => {
    console.log("test");
    if (email !== "") {
      setTimeout(async () => {
        console.log(email);
        const payload = {
          "email" : email
        }
        const url = "http://45.58.35.11:8082/user/check-email"
        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload)
      };
        let response = await fetch(url,requestOptions);
        let data = await response.json();

        console.log(response);
        if (data.error === false || data.error ===true) {
          setEmailAvailable(true)
          document.querySelector('.email-response').innerHTML = (data.message).toLowerCase();
          document.querySelector('.email-response').style.color = "red";
        }
      }, 1000);
    }
  }, [email]);

  /// toggle handlers ///

  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }
  function handleRealTimeEmail(e) {
    setEmail(e.target.value);
  }
  function showHidePassword() {
    setShowPassword((t) => !t);
  }
  function showHideConfirmPassword(){
    setShowConfirmPassword((t) =>!t);
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
                <Link to="login" className="login-link">
                  Login
                </Link>
              </p>
              <form action="" onSubmit={submit}>
                <div className="row">
                  <div className="col-lg-6 px-1">
                    <div className="input-box-wrapper mb-2">
                      <input
                        type="text"
                        name="firstName"
                        className="signup-box-input"
                        placeholder="First Name"
                        id="firstName"
                        onBlur={() => setFocus("false")}
                        onFocus={() => setFocus("true")}
                        onChange={(e) => {
                          setFristName(e.target.value);
                        }}
                      />
                      <small className="error-container"></small>
                    </div>
                  </div>
                  {/* <!-- col 6 --> */}
                  <div className="col-lg-6 px-1">
                    <div className="input-box-wrapper mb-2">
                      <input
                        type="text"
                        name="lastName"
                        className="signup-box-input"
                        placeholder="Last Name"
                        id="lastName"
                        onBlur={() => setFocus("false")}
                        onFocus={() => setFocus("true")}
                        onChange={(event) => {
                          setLastName(event.target.value);
                        }}
                      />
                      <small className="error-container"></small>
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 6 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-2">
                      <input
                        type="email"
                        name="email"
                        className="signup-box-input"
                        placeholder="Email Address"
                        id="email"
                        onBlur={() => setFocus("false")}
                        onFocus={() => setFocus("true")}
                        onChange={handleRealTimeEmail}
                      />
                      <small className="error-container"></small>
                      {
                        (emailAvailable) ? <p className="email-response">Email Available</p> : '' 
                      }
                    </div>
                    
                    
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-2">
                      <input
                        type={showPassword ? "text" : "password"}
                        name="password"
                        className="signup-box-input"
                        placeholder="Password"
                        id="password"
                        onBlur={() => setFocus("false")}
                        onFocus={() => setFocus("true")}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <small className="error-container"></small>
                      {showEyeIcon ? (
                        <i
                          className="far fa-eye password-eye-icon"
                          onClick={showHidePassword}
                        ></i>
                      ) : (
                        ""
                      )}
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-2">
                      <input
                        type={showConfirmPassword ? "text": "password"}
                        name="confirmPassword"
                        className="signup-box-input"
                        placeholder="Confirm Password"
                        id="confrimPassword"
                        onBlur={() => setFocus("false")}
                        onFocus={() => setFocus("true")}
                        onChange={(event) => {
                          setConfirmPassword(event.target.value);
                        }}
                      />
                        {/* {showEyeIconConfirm ? (
                        <i
                          className="far fa-eye password-eye-icon"
                          onClick={showHideConfirmPassword}
                        ></i>
                      ) : (
                        ""
                      )} */}
                      <small id="error-container"></small>
                    </div>
                    {showEyeIcon ?   <i className="far fa-eye password-eye-icon" onClick={showHidePassword}></i> : ''}
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6 px-1">
                        <div className="input-box-wrapper mb-3">
                          <DatePicker onChange={onChangeDate} value={date} />
                        </div>
                        {/* <!-- input-box-wrapper --> */}
                      </div>
                      <div className="col-lg-6 px-1">
                        <div className="input-box-wrapper mb-3">
                          <select
                            name=""
                            onBlur={() => setFocus("false")}
                            onFocus={() => setFocus("true")}
                            id="gender"
                            onChange={(event) => setGender(event.target.value)}
                          >
                            <option value="">Select Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                            <option value="3">I prefer not to say</option>
                          </select>
                          <small className="error-container"></small>
                        </div>
                        {/* <!-- input-box-wrapper --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <select
                        name=""
                        onBlur={() => setFocus("false")}
                        onFocus={() => setFocus("true")}
                        id="affiliation"
                        onChange={(event) => {
                          setAffiliation(event.target.value);
                        }}
                      >
                        <option value="">Select Affiliation</option>
                        <option value="1">Patient</option>
                        <option value="2">Caregiver</option>
                        <option value="3">Physician/Provider</option>
                        <option value="4">Research</option>
                        <option value="5">Pharmaceutical</option>
                      </select>
                      <small className="error-container"></small>
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
                    <div className="input-box-wrapper mb-2">
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
                          <div
                            className="social-icon-circle align-items-end"
                            onClick={FacebookAuth}
                          >
                            <i className="fa fa-facebook-f"></i>
                          </div>
                          {/* <!-- social-icon-circle --> */}
                        </Link>
                        <Link to="#" target="_blank">
                          <div
                            className="social-icon-circle"
                            style={{ backgroundColor: "whitesmoke" }}
                          >
                            <img src={googleG} alt="" onClick={GoogleAuth} />
                          </div>
                          {/* <!-- social-icon-circle --> */}
                        </Link>
                        <Link to="#" target="_blank">
                          <div
                            className="social-icon-circle"
                            onClick={TwitterAuth}
                          >
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
      {loading && <Loader />}
      {/* <Loader/> */}
    </div>
  );
}

export default Signup;
