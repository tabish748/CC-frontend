import React, { useState } from "react";
import logo from "../../images/logo.png";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";

import operations from '../../images/cancerConsulting/operations.png'
import credentiality from '../../images/cancerConsulting/credentiality.svg'
import review from '../../images/cancerConsulting/review.svg'
import revenue from '../../images/cancerConsulting/reveniew.svg'
import recruitment from '../../images/cancerConsulting/recruitment.svg'
import Program from '../../images/cancerConsulting/program.svg'
import billing from '../../images/cancerConsulting/billing.svg'
import staff from '../../images/cancerConsulting/staff.svg'
import { Link } from "react-router-dom";
const CancerCenterConsultingCards = () => {
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

            <h1 class="text-center mb-4 site-heading">Cancer Center Consulting</h1>
                <div className="row">
                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper ">
                                <img src={operations} alt=""/>
                            </div>
                            <p class="text-center">
                                Operations
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper">
                                <img src={credentiality} alt=""/>
                            </div>
                            <p class="text-center">
                                  Credentialing
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">

                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper ">
                                <img src={review} alt=""/>
                            </div>
                            <p class="text-center">
                                Outside Peer Review
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">

                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper ">
                                <img src={revenue} alt=""/>
                            </div>
                            <p class="text-center">
                               Revenue Generation
                            </p>
                        </div>
                    </div>


                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper">
                                <img src={recruitment} alt=""/>
                            </div>
                            <p class="text-center">
                               Recruitment
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper">
                                <img src={Program} alt=""/>
                            </div>
                            <p class="text-center">
                                Clinical Trial Program
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper ">
                                <img src={billing} alt=""/>
                            </div>
                            <p class="text-center">
                              Billing/Revenue Cycle
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-80 mx-auto">
                            <div class="service-card-wrapper ">
                                <img src={staff} alt=""/>
                            </div>
                            <p class="text-center">
                                Staff Training
                            </p>
                        </div>
                    </div>

                </div>
                {/* row */}

           <Link to='/contactUs'>
           <button className="blue-button mx-auto d-block mt-4" style={{width:'fit-content'}}>
                Contact Us
            </button>
           </Link>
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

export default CancerCenterConsultingCards;
