import React, {useState} from 'react';
import birds from "../../images/birds.png";
import signupGround from "../../images/signup-ground.png";
import Header from '../../components/Header/Header';
import logo from "../../images/logo.png";
import Sidebar from '../../components/sidebar/Sidebar';
import trialFinderimg from '../../images/trail-finder/m1.png'
import trialFinderimg2 from '../../images/trail-finder/m2.png'
import trialFinderimg3 from '../../images/trail-finder/m3.svg'
// import pharmapic from '../../images/pharma.png'
// import cancerGuide from '../../images/center-guide.png'
function ClinicalTrialFinderMenu(){
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
                
               <div class="service-row-wrapper" style={{height: "65%"}}>
            <div class="service-cards-area">
                <h1 class="text-center">Clinical Trial Finder</h1>
                <div class="row mt-custom">
                    <div class="col-md-4 col-sm-12 px-5">
                        <div class="service-card-parent  w-90 mx-auto">
                            <div class="service-card-wrapper align-items-end">
                                <img src={trialFinderimg} alt=""/>
                            </div>
                            <p class="text-center">
                                Patients
                            </p>
                        </div>
                    </div>
                    
                    <div class="col-md-4 col-sm-12 px-5">
                        <div class="service-card-parent  w-90  mx-auto">
                            <div class="service-card-wrapper align-items-end">
                                <img src={trialFinderimg2} alt="" style={{width: "100%",objectFit: "fill",height: "auto"}}/>
                            </div>
                            
                            <p class="text-center">
                                Health Care Providers
                            </p>
                        </div>
                        
                    </div>
                    
                    <div class="col-md-4 col-sm-12 px-5">
                        <div class="service-card-parent w-90  mx-auto">
                            <div class="service-card-wrapper align-items-end">
                                <img src={trialFinderimg3}  style={{width: "100%",objectFit: "fill",height: "auto"}} alt=""/>
                            </div>
                            
                            <p class="text-center">
                                Pharmaceuticals <br/>and Researchers </p>
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

export default ClinicalTrialFinderMenu;
