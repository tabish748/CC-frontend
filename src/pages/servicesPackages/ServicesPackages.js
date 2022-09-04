import React,{useState} from 'react';
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import search from '../../images/search.png'
import compass from '../../images/compass.png'
import analysis from '../../images/analysis.png'
import theory from '../../images/theory.png'
import assistance from '../../images/assistance.png'

function ServicesPackages() {
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
            <h1 className="text-center">Services</h1>
            <div className="row">
                <div className="col mt-4 col-xs-12 px-3">
                    <div className="servicepackage-card-wrapper">
                            <img src={search} alt="" />
                            <p>Detailed Reports</p>
                            <p>A detailed report outlining the most lucrative areas to study your drug.
                            </p>
                    </div>
                </div>

              
                <div className="col mt-4 col-xs-12 px-3">
                    <div className="servicepackage-card-wrapper">
                            <img src={compass} alt="" />
                            <p>Efficacy Prediction</p>
                            <p>Efficacy prediction for your asset in the areas identified.
                            </p>
                    </div>
                </div>

                <div className="col mt-4 col-xs-12 px-3">
                    <div className="servicepackage-card-wrapper">
                            <img src={analysis} alt="" />
                            <p>Updated Analysis</p>
                            <p>Thorough up to date analysis of competitors with similar assets and how they're positioned.
                            </p>
                    </div>
                </div>

                <div className="col mt-4 col-xs-12 px-3">
                    <div className="servicepackage-card-wrapper">
                            <img src={theory} alt="" />
                            <p>Game Theory Analysis</p>
                            <p>Game theory analysis delineating the risks and benefits of different asset positioning strategies.
                            </p>
                    </div>
                </div>

                <div className="col mt-4 col-xs-12 px-3">
                    <div className="servicepackage-card-wrapper">
                            <img src={assistance} alt="" />
                            <p>Assistance</p>
                            <p>Assistance with associated clinical trial design and conducting of the trial.
                            </p>
                    </div>
                </div>


            </div>

            <h1 className="text-center mt-3">Packages</h1>
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

export default ServicesPackages;
