import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import signupBirds from "../../images/signup-birds.png";
import signupGround from "../../images/signup-ground.png";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {STAGGING_BACKEND , LOCAL_BACKEND} from '../../common/helper';

function UserVerification() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  ///form handler ///
  let { id } = useParams();
  const navigate = useNavigate();
  console.log(id)
  ///toggle handlers ///
  const Event = () => {
    navigate('/login')
  }
  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }

  useEffect(async()=>{
    const url = STAGGING_BACKEND+"user/verify-user";
        const payload = {
          "token": id
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };

        const response = await fetch(url, requestOptions);
        const responseData = await response.json();
        console.log(responseData)        
  })

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
          {/* <Header header={header} /> */}

          <div className="signup-form-main-area" >
            <div className="signup-form-wrapper mt-5">
              <h1 className="marginZero site-heading">
              Account Verification
              </h1>
              <p className="marginZero BluetextUnderHeading" >Verify Your Account</p>
              {/* <form action="" className="login-form" onSubmit={submit}> */}
              <form action="" className="login-form" >
                <div className="row">
                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
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
                        onClick={Event}
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

export default UserVerification;
