import React, { useState } from "react";
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import accounts from "../../images/accounts.png";
import characteristics from "../../images/characteristics.png";
import security from "../../images/security.png";
const AccountsSetting = () => {
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

          <div className="new-page-content-wrapper mt-4">
            <h1 className="site-heading">Account Settings</h1>
            <div className="account-settings-parent w-100 mt-4">
              <div class="row mt-custom">
                <div class="col-md-4 col-sm-12 px-5">
                  <div class="service-card-parent  w-90 mx-auto">
                    <div class="service-card-wrapper align-items-end">
                      <img src={accounts} alt="" />
                    </div>
                    <p class="text-center">My Characteristics</p>
                  </div>
                </div>

                <div class="col-md-4 col-sm-12 px-5">
                  <div class="service-card-parent  w-90  mx-auto">
                    <div class="service-card-wrapper align-items-end">
                      <img src={characteristics} alt="" />
                    </div>

                    <p class="text-center">Accounts</p>
                  </div>
                </div>

                <div class="col-md-4 col-sm-12 px-5">
                  <div class="service-card-parent w-90  mx-auto">
                    <div class="service-card-wrapper ">
                      <img src={security} alt="" />
                    </div>

                    <p class="text-center">
                      Security <br />{" "}
                    </p>
                  </div>
                </div>
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

export default AccountsSetting;
