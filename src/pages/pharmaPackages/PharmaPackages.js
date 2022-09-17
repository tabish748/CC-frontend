import React,{useState} from 'react';
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import dctr from '../../images/dctr.png'
import trailDesign from '../../images/trialDesign.png'
import mapPointer from '../../images/mapPointer.png'
import plus from '../../images/plus.png'

function PharmaPackages() {
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

      <div className="services-packages-section">
      <Sidebar
          sideBar={sideBar}
          marginTopH6="mt3point5rem"
          margintop2rem="margintop2rem"
        />

        <div className="services-packages-inner-parent">
        <Header header={header} />
        <div className="service-packages-main-area">
            <h1 className="text-center mb-3 site-heading">Pharmaceutical Consulting</h1>
        
            <div className="row">
                   

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-90 mx-auto">
                            <div class="service-card-wrapper align-items-end">
                                <img src={mapPointer} alt=""/>
                            </div>
                            <p class="text-center">
                               Asset positioning
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-90 mx-auto">
                            <div class="service-card-wrapper align-items-end">
                                <img src={trailDesign} alt=""/>
                            </div>
                            <p class="text-center">
                                Clinical Trial Design
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-90 mx-auto">
                            <div class="service-card-wrapper align-items-end">
                                <img src={dctr} alt=""/>
                            </div>
                            <p class="text-center">
                                Medical Advisory
                            </p>
                        </div>
                    </div>

                    <div className="col-lg-3 col-xs-6 col-sm-6 mt-2">
                    <div class="service-card-parent  w-90 mx-auto">
                            <div class="service-card-wrapper align-items-end">
                                <img src={plus} className="w-100 h-auto" alt=""/>
                            </div>
                            <p class="text-center">
                               Commercial Development
                            </p>
                        </div>
                    </div>

                </div>


            <h1 className="text-center site-heading">Packages</h1>
            <div className="row">
                <div className="col-lg-4 mt-3">
                    <div className="packages-card-wrapper">
                        <h2 style={{color:"#b74900"}}>Bronze</h2>
                        <p>
                            25,000 / asset    
                        </p>
                        <p>time to complete</p>
                        <p>analysis and provide</p>
                        <p>recommendations: 3-4 weeks</p>
                    </div>
                </div>

                <div className="col-lg-4 mt-3">
                    <div className="packages-card-wrapper">
                        <h2 style={{color:"#fff"}}>Silver</h2>
                        <p>10,000 / asset </p>
                        <p> includes assistance with clinical trial design,</p>
                        <p>asset positioning analysis,</p>
                        <p>24/7 medical advisory,</p>
                        <p>and 24/7 commercial development.</p>
                    </div>
                </div>

                <div className="col-lg-4 mt-3">
                    <div className="packages-card-wrapper">
                        <h2 style={{color:"#ffb300"}}>Gold</h2>
                        <p> 100,000 / asset  </p>
                        <p>includes assistance with clinical trial design,</p>
                        <p>asset positioning analysis,</p>
                        <p>24/7 medical advisory , and</p>
                        <p>24/7 commercial</p>
                    </div>
                </div>
            </div>
            <button className='gray-button submit-btn mt-4' style={{color:"white"}}>
                Contact Us
            </button>
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
      </div>    
      {/* services-packages-section */}
       </>
    );
}

export default PharmaPackages;
