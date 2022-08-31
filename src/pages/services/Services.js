import React, {useState} from 'react';
import treatmentguidepic from '../../images/treatment-guide.png'
import birds from "../../images/birds.png";
import signupGround from "../../images/signup-ground.png";
import Header from '../../components/Header/Header';
import logo from "../../images/logo.png";
import Sidebar from '../../components/sidebar/Sidebar';
import trialFinderimg from '../../images/trial-finder.png'
import pharmapic from '../../images/pharma.png'
import cancerGuide from '../../images/center-guide.png'
function Services(){
  
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
        <div className="services-section">
    
            <Sidebar sideBar={sideBar} marginTopH6='mt3point5rem' margintop2rem = 'margintop2rem'/>
            
            
                <div className="service-main-area">
                <Header header={header}/>

                    
                    <div className="service-row-wrapper">
                        <div className="service-cards-area">
                            <div className="row">
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 px-4">
                                    <div className="service-card-parent">
                                        <div className="service-card-wrapper">
                                            <img src={trialFinderimg} alt=""/>
                                        </div>
                                        <p className="text-center">
                                            Clinical Trial <br/> Finder
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 px-4">
                                    <div className="service-card-parent">
                                        <div className="service-card-wrapper">
                                            <img src={treatmentguidepic} alt=""/>
                                        </div>
                                        <p className="text-center">
                                            Cancer Clarity <br/> Tratement Guide
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 px-4">
                                    <div className="service-card-parent">
                                        <div className="service-card-wrapper">
                                            <img src={pharmapic} alt=""/>
                                        </div>
                                        <p className="text-center">
                                            Pharmaceutical
                                            <br/>Consulting
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 px-4">
                                    <div className="service-card-parent">
                                        <div className="service-card-wrapper">
                                            <img src={cancerGuide} alt=""/>
                                        </div>
                                        <p className="text-center">
                                        Cancer Center <br/> Consulting
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        <img src={birds} style={{height:"100px",width:"auto"}} className="signup-birds hideInMobile" alt=""/>
        <img src={signupGround} style={{height:"150px",width:"auto"}} className="signup-ground hideInMobile" alt=""/>
    </div>
        </>
    );
}

export default Services;
