import React, {useState} from 'react';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import intro from '../../images/intro.png';
import logo from "../../images/logo.png";
import birds from "../../images/birds.png";
import signupGround from "../../images/signup-ground.png";
import { Link } from 'react-router-dom';
function Welcome() {
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
  
      <div class="welcome-section">
      <Sidebar sideBar={sideBar} marginTopH6='mt3point5rem' margintop2rem = 'margintop2rem'/>
  
        <div class="welcome-main-area">
        <Header header={header}/>
          <div class="welcome-row-wrapper mt-5">
            <div class="row">
              <div class="col-lg-5">
                <div class="welcomeCol-wrapper">
                  <h2 class="text-center">
                    Welcome to <br />
                    Cancer Clarity
                  </h2>
  
                  <p class="mt-4 mb-5">
                    Choosing the right disease process for your asset is
                    imperative. Several drugs have performed suboptimally because
                    they weren't studied in the ideal disease. As opposed to all
                    of our competitors, we have broad expertise in all of
                    hematology and medical oncology, uniquely enabling us to best
                    identify where to position your asset. Our consultants all
                    have MD and MBA degrees, and have conducted clinical trials in
                    numerous hematologic and oncologist disorders. Our CEO has an
                    MD, PhD, and MBA, and has participated in nearly 100 clinical
                    trials. He has three papers in the NEJM and two in Lancet.
                  </p>
  
                  <Link to="/services"><button class="gray-button welcome-btn">Enter the site</button></Link>
                </div>
              </div>
              <div class="col-lg-7">
                <div class="welcome-img-video-wrapper">
                  <img src={intro} alt="" srcset="" />
                </div>
                
              </div>
              
            </div>
            
          </div>
          
        </div>
        
        <img
          src={birds}
          style={{height: "100px", width: "auto"}}
          class="signup-birds hideInMobile"
          alt=""
        />
        <img
          src={signupGround}
          style={{height: "150px", width: "auto"}}
          class="signup-ground hideInMobile"
          alt=""
        />
      </div>
       </>
      
    );
}

export default Welcome;
