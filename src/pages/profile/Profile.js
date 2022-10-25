import React, { useState } from "react";
import logo from "../../images/logo.png";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import team from '../../images/team.png'
import calendar from '../../images/calendar.png'
import plans from '../../images/plans.png'
import medals from '../../images/medals.png'
import coordinator from '../../images/coordinator.png'
import checklist from '../../images/checklist.png'
import settings from '../../images/settings.png'
import profilePic from '../../images/profilePic.png'
import {Link} from 'react-router-dom'
function Profile() {
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
      <div className="profile-section-wrapper">
        <Sidebar
          sideBar={sideBar}
          marginTopH6="mt3point5rem"
          margintop2rem="margintop2rem"
        />
        <div className="profile-inner-parent">
          <Header header={header} />
            <div className="profile-main-area mt-4">

            <h1 class="text-center mb-4 site-heading">My Profile</h1>
                <div className="row">
                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                 <Link to='/my-team'>
                 <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper ">
                                <img src={team} alt=""/>
                            </div>
                            <p class="text-center">
                                Team
                            </p>
                        </div>
                 </Link>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper">
                                <img src={calendar} alt=""/>
                            </div>
                            <p class="text-center">
                                Calendar
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">

                 <Link to='/saved-treatment-plans'>
                 <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper ">
                                <img src={plans} alt=""/>
                            </div>
                            <p class="text-center">
                                My Saved
                                <br />
                                Treatment Plans
                            </p>
                        </div>
                 </Link>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
        <Link to='/saved-trials'>
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper ">
                                <img src={medals} alt=""/>
                            </div>
                            <p class="text-center">
                                My Saved Trials
                            </p>
                        </div>
                        </Link>
                    </div>


                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper">
                                <img src={coordinator} alt=""/>
                            </div>
                            <p class="text-center">
                                My Trial  
                                <br />
                                Coordinator
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper">
                                <img src={checklist} alt=""/>
                            </div>
                            <p class="text-center">
                                Checklists
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <Link to='/settings-accounts'>
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper ">
                                <img src={settings} alt=""/>
                            </div>
                            <p class="text-center">
                                Account Settings
                            </p>
                        </div>
                        </Link>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper ">
                                <img src={profilePic} alt=""/>
                            </div>
                            <p class="text-center">
                                Add Profile Picture
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        {/* profile-inner-parent */}
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

export default Profile;
