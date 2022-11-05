import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import signupBirds from "../../images/signup-birds.png";
import signupGround from "../../images/signup-ground.png";
import googleG from "../../images/g.svg";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { GoogleAuth, FacebookAuth, TwitterAuth } from "../../firebase/authentication";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { verification } from "../../redux/slices/verification";
import Swal from 'sweetalert2';
import { Navigate } from "react-router-dom";
import TrialCriteria from "../trailCriteria/trialCriteria";
import { useNavigate } from "react-router-dom";

function UserVerification() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const [verificationPin, setVerificationPin] = useState("");

  const navigate = useNavigate();
  const dispatch = new useDispatch();


  ///form handler ///

  const submit = (event) => {
    event.preventDefault();
    const data = { "email": sessionStorage.getItem("user_verification"),"verification_pin" : verificationPin}
    dispatch(verification(data))
      .unwrap()
      .then((originalPromiseResult) => {
        if (originalPromiseResult.error === false) {
          Swal.fire({
            title: 'Sucessful!',
            text: originalPromiseResult.message,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          sessionStorage.removeItem("user_verification")
          navigate('/login')
        } else {
          Swal.fire({
            title: 'Error!',
            text: originalPromiseResult.message,
            icon: 'error',
            confirmButtonText: 'Try again'
          })}
        }).catch((rejectedValueOrSerializedError) => {
          Swal.fire({
            title: 'SERVER ERROR',
            text: rejectedValueOrSerializedError.message,
            icon: 'error',
            confirmButtonText: 'ok'
          });})
  };

  ///toggle handlers ///
  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }

  if (localStorage.getItem("token")){
    return <Navigate to="/" />
  }
  else{
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
              <h1 className="marginZero site-heading">
              Account Verification
              </h1>
              <p className="marginZero BluetextUnderHeading">Verify Your Account</p>
              {/* <form action="" className="login-form" onSubmit={submit}> */}
              <form action="" className="login-form" >
                <div className="row">
                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        name="userName"
                        className="signup-box-input loginfields"
                        placeholder="Enter Your Verification Pin"
                        id=""
                        onChange={(event) => { setVerificationPin(event.target.value) }}
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 px-1">
                  </div>

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">

                     <input
                        type="submit"
                        className="gray-button submit-btn w-100"
                        value="VERIFY"
                        onClick={submit}
                      />
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
}

export default UserVerification;
