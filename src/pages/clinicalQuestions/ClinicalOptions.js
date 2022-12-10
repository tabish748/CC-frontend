import React, { useState } from "react";
import logo from "../../images/logo.png";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import {Link} from 'react-router-dom'
function ClinicalOptions() {
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
      <div className="contact-section-wrapper clicnial-question-section">
        <Sidebar
          sideBar={sideBar}
          marginTopH6="mt3point5rem"
          margintop2rem="margintop2rem"
        />
        <div className="contact-inner-parent">
          <Header header={header} />

          <div className="contact-form-main-area">
            <div className="contact-form-wrapper mt-2 clicnial-question-wrapper">
              <h1 class="text-center site-heading">Clinical Trial Finder</h1>
              <p className="BluetextUnderHeading">Select your trial criteria you wish to filter by</p>
            
            <p className="text-center">Default setting is all.</p>

            <div className="row">
                <div className="col-lg-4">
                    <div className="question-option-card">
                        <p>Demographics</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="question-option-card">
                        <p>Location</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="question-option-card">
                        <p>Cancer Type & Stage</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="question-option-card">
                        <p>Trial Type & Sponcer</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="question-option-card">
                        <p>Performance Status & Organ Function</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="question-option-card">
                        <p>Cancer Characteristics</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="question-option-card">
                        <p>Molecular Profile</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="question-option-card">
                        <p>Cancer Treatment History</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="question-option-card">
                        <p>Drug Name & Mechanism of Action</p>
                    </div>
                </div>
            </div>

<Link to="/clinical-questions">
<button className="gray-button submit-btn mt-5">
    Next
</button>
</Link>
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
}

export default ClinicalOptions;
