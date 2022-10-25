import React, { useState } from "react";
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import avatarImage from '../../images/avatarImage.png'
import accounts from "../../images/accounts.png";
import characteristics from "../../images/characteristics.png";
import security from "../../images/security.png";
const AddTeam = () => {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [showAddTeamModal, setShowAddTeamModal] = useState(false);

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
            <h1 className="site-heading">My Team</h1>
          
            <div className="team-content-wrapper">
                <div className="team-upload-btn shadow" onClick={() => setShowAddTeamModal(true)}>
                    <i className="fa fa-plus"></i>
                </div>
                {/* team-upload-btn */}
                <p className="mt-3">Add Team Member</p>

                <div className="cta-wrapper d-flex mt-5">
                    <button className="gray-button">Cancel</button> &nbsp;
                    <button className="blue-button">Save</button>
                </div>
                {/* cta-wrapper */}
            </div>   
            {/* team-content-wrapper */}

          </div>
        </div>


  {
    showAddTeamModal && 
    <div className="add-team-popup-wrapper">
        <div className="addteam-popup-inner-area">
            <div className="img-area">
                <img src={avatarImage} alt="" />
            </div>
            {/* img-area */}
            <div className="addteam-form-area">
                <form>
                <label htmlFor="">Name</label>
                <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        className="signup-box-input loginfields"
                      />
                    </div>

                    <label htmlFor="">Email</label>
                <div className="input-box-wrapper mb-3">
                      <input
                        type="email"
                        className="signup-box-input loginfields"
                      />
                    </div>
                    <button className="blue-button">
                        Send Invite
                    </button>
                </form>

                <div className="close-popup-button" onClick={() =>setShowAddTeamModal(false)}>
                        <i className="fa fa-close"></i>
                </div>
            </div>
            {/* addteam-form-area */}
        </div>
    </div>

  }





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

export default AddTeam;
