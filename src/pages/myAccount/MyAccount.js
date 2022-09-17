import React, { useState } from "react";
import logo from "../../images/logo.png";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
const MyAccount = () => {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }
  return (
    <>
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

      <div className="contact-section-wrapper">
        <Sidebar
          sideBar={sideBar}
          marginTopH6="mt3point5rem"
          margintop2rem="margintop2rem"
        />
        <div className="contact-inner-parent">
          <Header header={header} />

          <div className="contact-form-main-area account-form-main-area">
            <div className="contact-form-wrapper account-form-wrapper mt-2">
              <h1 class="text-center site-heading">My Account</h1>

              <p className="mt-5 text-center" style={{fontSize:"18px"}}>
                Please Input The Following Data
              </p>

              <form action="" className="mt-4">
                <div className="row">
                  <div className="col-lg-6 px-4">
                    <div className="form-group mb-2 input-box-wrapper">
                      <label htmlFor="">First Name:</label>
                      <input type="text" className="signup-box-input" style={{backgroundColor:"#ddedf1"}} />
                    </div>
                  </div>
                  <div className="col-lg-6 px-4">
                    <div className="form-group mb-2 input-box-wrapper">
                      <label htmlFor="">Last Name:</label>
                      <input type="text" className="signup-box-input" style={{backgroundColor:"#ddedf1"}}/>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6 px-4">
                    <div className="form-group mb-2 input-box-wrapper">
                      <label htmlFor="">Organization Name:</label>
                      <input type="text" className="signup-box-input" style={{backgroundColor:"#ddedf1"}} />
                    </div>
                  </div>

                  <div className="col-lg-6 px-4">
                    <div className="form-group mb-2 input-box-wrapper">
                      <label htmlFor="">Role:</label>
                      <input type="text" className="signup-box-input" style={{backgroundColor:"#ddedf1"}} />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6 px-4">
                    <div className="form-group mb-2 input-box-wrapper">
                      <label htmlFor="">Email Address:</label>
                      <input type="email" className="signup-box-input" style={{backgroundColor:"#ddedf1"}} />
                    </div>
                  </div>

                  <div className="col-lg-6 px-4">
                    <div className="form-group mb-2 input-box-wrapper">
                      <label htmlFor="">Phone Number:</label>
                      <input type="number" className="signup-box-input" style={{backgroundColor:"#ddedf1"}} />
                    </div>
                  </div>
                </div>


                <div className="row mt-4">
                  <div className="col-lg-6 px-4">
                    <div className="form-group mb-2 d-flex justify-content-end" >
                     <button type="submit" className="blue-button">
                        SAVE
                     </button>
                    </div>
                  </div>

                  <div className="col-lg-6 px-4">
                  <div className="form-group mb-2 d-flex justify-content-start"  >
                     <button type="submit" className="blue-button" style={{backgroundColor:"#c7c7c7",color:"#000"}}>
                        CANCEL
                     </button>
                    </div>
                  </div>
                </div>
              
              </form>
            </div>
            {/* contact-form-wrapper */}
          </div>
          {/* contact-form-main-area */}
        </div>
        {/* contact-inner-parent */}
        <img
          src={birds}
          style={{ height: "100px", width: "auto" }}
          className="signup-birds hideInMobile"
          alt=""
        />
        <img
          src={leafs}
          style={{ height: "150px", width: "auto" }}
          className="signup-ground hideInMobile"
          alt=""
        />
      </div>
    </>
  );
};

export default MyAccount;
