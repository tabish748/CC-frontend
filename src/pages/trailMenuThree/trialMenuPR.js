import React, { useState } from "react";
import logo from "../../images/logo.png";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
const TrialMenuPR = () => {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }
  function handleDropdownButton() {
    setShowDropdown((t) => !t);
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
              <h1 className="text-center site-heading">
                Clinical Trial Finder
              </h1>
              <p className="mb-5 BluetextUnderHeading">
                Select your trial criteria you wish to filter by
              </p>
              <Link to="/clinical-questions-options">
                <button className="light-theme-btn mb-3">
                  Research cancer realted topics by <br /> specific criteria
                  <i class="fa fa-angle-right" aria-hidden="true"></i>
                </button>
              </Link>
              <Link to="/clinical-questions">
                <button className="light-theme-btn  mb-3">
                  Search cancer clarity for trials <br />a patient is eligible
                  for <i class="fa fa-angle-right" aria-hidden="true"></i>
                </button>
              </Link>
              <button
                className="light-theme-btn  mb-3"
                onClick={handleDropdownButton}
              >
                Assess a patient's eligibility for specific <br />
                trials I know{" "}
                <i class="fa fa-angle-right" aria-hidden="true"></i>
              </button>
              {showDropdown && (
                <div className="dropdown-eligibilty-container">
                  <div className="search-box-area">
                    <i className="fa fa-search"></i>
                    <input type="search" placeholder="Search by  NCT Number" />
                  </div>
                  <button class="blue-button mx-auto d-block mt-3">
                    Search
                  </button>
                </div>
              )}

              <Link to="/saved-trials">
                <button className="light-theme-btn w-100 mb-3">
                  Determine my patient's eligibility <br /> for trials on my
                  saved list
                </button>
              </Link>

             
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
};

export default TrialMenuPR;
