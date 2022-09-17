import React, { useState } from "react";
import logo from "../../images/logo.png";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";

const TrialCriteria = () => {

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

            <div className="trial-criteria-main-area mt-4">
            <div className="trial-criteria-buttons-wrapper">
            <h1 className="text-center site-heading">Clinical Trial Finder</h1>
            <p className="mb-5">Select your trial criteria you wish to filter by</p>

            <button className="light-theme-btn mb-3">
                Find Trials You're Eligible for <i class="fa fa-angle-right" aria-hidden="true"></i>

            </button>
            <button className="light-theme-btn  mb-3">
                Determine Eligibilty for Trials <br /> I know <i class="fa fa-angle-right" aria-hidden="true"></i>

            </button>
            </div>
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
}

export default TrialCriteria;
