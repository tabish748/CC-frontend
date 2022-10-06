import React, { useState, useEffect } from "react";
import logo from "../images/logo.png";
import signupBirds from "../images/signup-birds.png";
import signupGround from "../images/signup-ground.png";
import Swal from 'sweetalert2';

import googleG from "../images/g.svg";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import Header from "../components/Header/Header";
import { GoogleAuth, FacebookAuth, TwitterAuth } from "../firebase/authentication";
import DatePicker from 'react-date-picker';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { signupAction } from "../redux/slices/userSignup";

function Signup() {

  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);


  /// input handlers and form submitter ///

  const [firstName, setFristName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [affiliation, setAffiliation] = useState("")
  const [date, onChangeDate] = useState(new Date());
  const [gender, setGender] = useState("")


  const dispatch = new useDispatch();
  const response = useSelector (state=>state.userReg);

  const submit = (event) => {
    event.preventDefault();
    const data = {
      "first_name": firstName,
      "last_name": lastName,
      "email": email,
      "password": password,
      "status": "1",
      "user_type": affiliation,
      "date_of_birth": date,
      "gender": gender

    };

    dispatch(signupAction(data))
    .unwrap()
    .then((promiseResult)=>{
      if (promiseResult.error === false) {
        Swal.fire({
          title: 'Sucessfull!',
          text: promiseResult.message,
          icon: 'success',
          confirmButtonText: 'Cool'
        })
      }
      else {
        Swal.fire({
          title: 'Error!',
          text: promiseResult.message,
          icon: 'error',
          confirmButtonText: 'ok'
        })
      }
    }).catch((serverRejection)=>{
      Swal.fire({
        title: 'Error!',
        text: serverRejection.message,
        icon: 'error',
        confirmButtonText: 'ok'
      })
    })

  }

  ///  backend call        ///

  // /// effect manipulation ///
  useEffect(() => {
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
                        onChange={(e) => { setFristName(e.target.value) }}
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
                        onChange={(event) => { setLastName(event.target.value) }}
                      />
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 6 --> */}

                  <div className="col-lg-12 px-1">
                    {/* <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        name="userName"
                        className="signup-box-input"
                        placeholder="User Name"
                        id=""
                        onChange={(event)=>{setUserName(event.target.value)}}
                      />
                    </div> */}
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
                        onChange={((event) => { setEmail(event.target.value) })}
                      />
                    </div>
                    {/* <!-- input-box-wrapper --> */}
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="password"
                        name="password"
                        className="signup-box-input"
                        placeholder="Password"
                        id=""
                        onChange={(event) => { setPassword(event.target.value) }}
                      />
                    </div>
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
                          <select name="" id="" onChange={(event) => setGender(event.target.value)}>
                            <option value="">Select Gender</option>
                            <option value="1">Male</option>
                            <option value="2">Female</option>
                          </select>
                        </div>
                        {/* <!-- input-box-wrapper --> */}
                      </div>
                    </div>
                  </div>
                  {/* <!-- col 12 --> */}

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <select name="" id="" onChange={(event) => { setAffiliation(event.target.value) }}>
                        <option value="">Select Affiliation</option>
                        <option value="1">Patients</option>
                        <option value="2">Care taker</option>
                        <option value="3">Researcher</option>

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
                            <img src={googleG} alt="" onClick={GoogleAuth} />
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
