import React, { useState } from "react";
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
const SettingAccounts = () => {
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
      <div className="cc-page-wrapper">
        <Sidebar
          sideBar={sideBar}
          marginTopH6="mt3point5rem"
          margintop2rem="margintop2rem"
        />
        <div className="main-area-inner-wrapper">
          <Header header={header} />

          <div className="new-page-content-wrapper mt-5">
            <h1 className="site-heading">Account Settings</h1>
            <div className="w-100 mt-4" style={{ maxWidth: "750px" }}>
              <div className="subheading-wrapper">
                <h3>Profile</h3>
              </div>
              <div class="row mt-4">
                <div className="col-lg-6">
                  <div className="accounts-form-card-wrapper">
                    <h5 className="label">First Name:</h5>
                    <p>Tabish</p>
                  </div>
                </div>
                {/* col 6 */}

                <div className="col-lg-6">
                  <div className="accounts-form-card-wrapper">
                    <h5 className="label">Last Name:</h5>
                    <p>Irfan</p>
                  </div>
                </div>
                {/* col 6 */}
              </div>

              <div class="row mt-4">
                <div className="col-lg-6">
                  <div className="accounts-form-card-wrapper">
                    <h5 className="label">Email:</h5>
                    <p>irfantabish719@gmail.com</p>
                  </div>
                </div>
                {/* col 6 */}

                <div className="col-lg-6">
                  <div className="accounts-form-card-wrapper">
                    <h5 className="label">DOB:</h5>
                    <p>24 july, 2000</p>
                  </div>
                </div>
                {/* col 6 */}
              </div>
              <div class="row mt-4">
                <div className="col-lg-6">
                  <button className="blue-button">Edit Profile</button>
                </div>
                {/* col 6 */}
              </div>
              {/* row */}

              <div className="subheading-wrapper d-flex align-items-end mt-4">
                <h3 className="m-0">Your Plan:</h3>
                <p className="mt-0 paymentPlanName">
                  Gold <span>(All the premium benefits)</span>{" "}
                </p>
              </div>
              {/* subheading wrapper */}
              <div class="row mt-4">
                <div className="col-lg-6">
                  <div className="accounts-form-card-wrapper">
                    <h5 className="label">Payment:</h5>
                    <p>Your next bill is for $___ On _____ </p>
                  </div>
                </div>
                {/* col 6 */}

                <div className="col-lg-6">
                  <div className="accounts-form-card-wrapper">
                    <h5 className="label">Payment Details:</h5>
                    <p>Your card Ending in 6159</p>
                  </div>
                </div>
                {/* col 6 */}
              </div>

              <div class="row mt-4">
                <div className="col-lg-6">
                  <button className="blue-button">Payment Settings</button> &nbsp; &nbsp;
                  <button className="blue-button">Billing</button>
                </div>
                {/* col 6 */}

                <div className="col-lg-6">
               
                </div>
                {/* col 6 */}
              </div>
            </div>
          </div>
        </div>
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

export default SettingAccounts;
