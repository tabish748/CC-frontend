import React,{useState, useEffect} from 'react';
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import logo from "../../images/logo.png";

const UploadPicture = () => {
    const [header, setHeader] = useState(false);
    const [sideBar, setSideBar] = useState(false);
    function handleHeader() {
      setHeader((t) => !t);
    }
    function handleSideBar() {
      setSideBar((t) => !t);
    }
 function loadFile(event) {
	var image = document.getElementById('output');
	image.src = URL.createObjectURL(event.target.files[0]);
  };


  
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
            <h1 className="site-heading">Profile Picture</h1>
           
           <div className="profile-picture-content-wrapper mt-4">
            <h2>Upload Picture</h2>
        <div className="upload-picture-form-wrapper">
        <div className="image-wrapper shadow">
        <img id="output" width="200" />	
        </div>
        <div className="cta-wrapper" style={{marginLeft: '50px'}}>
        <button className='blue-button  d-block mb-4' >
        <i class="fa fa-upload" aria-hidden="true"></i> &nbsp; 
        Upload Picture
         <input type='file' onchange={loadFile} name="image" id="file"  /> </button>

        
        <button className='blue-button  d-block'>
        <i class="fa fa-upload" aria-hidden="true"></i> &nbsp; Remove Picture</button>
        </div>
        {/* cta-wrapper */}
        {/* image-wrapper */}
        </div>
           </div>
           {/* profile-picture-content-wrapper */}


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
        </>
    );
}

export default UploadPicture;
