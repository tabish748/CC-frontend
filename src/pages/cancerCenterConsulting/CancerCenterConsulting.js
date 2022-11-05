import React,{useState} from 'react';
import ContentImageSection from '../../components/ContentImageSection/ContentImageSection'
import Header from '../../components/Header/Header';
import Sidebar from '../../components/sidebar/Sidebar';
import birds from "../../images/birds.png";
import signupGround from "../../images/signup-ground.png";
import logo from "../../images/logo.png";
import intro from '../../images/intro.png'
function CancerCenterConsulting() {
    const headingForCCCLine1 = 'Cancer Center Consulting'
    const contentObj ={
      heading1:{headingForCCCLine1},
      img:{intro},
      buttonText:"Enter The Site",
      buttonLink:'cancer-consulting-cards'
    }

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
       <ContentImageSection  obj={contentObj}/>
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

export default CancerCenterConsulting;
