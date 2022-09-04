import React, { useState } from "react";
import logo from "../../images/logo.png";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";

function ContactUs() {
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

          <div className="contact-form-main-area">
            <div className="contact-form-wrapper mt-2">
              <h1 class="text-center">Contact Us</h1>

              <form action="" className="mt-3">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-2">
                      <label htmlFor="">First Name:</label>
                      <input type="text" className="custom-form-control" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group mb-2">
                      <label htmlFor="">Last Name:</label>
                      <input type="text" className="custom-form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-2">
                      <label htmlFor="">Organization Name:</label>
                      <input type="text" className="custom-form-control" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-2">
                      <label htmlFor="">Role:</label>
                      <input type="text" className="custom-form-control" />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group mb-2">
                      <label htmlFor="">Email:</label>
                      <input type="email" className="custom-form-control" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group mb-2">
                      <label htmlFor="">Contact Number:</label>
                      <input type="number" className="custom-form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <label htmlFor="">Brief Description of Inquiry:</label>
                    {/* <input type="number" className="custom-form-control" /> */}
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="6"
                      className="custom-form-control"
                    ></textarea>
                  </div>
                </div>

                <input
                  type="submit"
                  className="gray-button submit-btn mt-3"
                  style={{ color: "#fff" }}
                  value="Send"
                />
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
}

export default ContactUs;
