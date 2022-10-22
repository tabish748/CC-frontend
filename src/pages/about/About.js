import React, { useState } from "react";
import logo from "../../images/logo.png";
import birds from "../../images/birds.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import ContentImageSection from "../../components/ContentImageSection/ContentImageSection";
import CEO_img from "../../images/ceo.jpg";
import avatar from "../../images/avatar.jpg";

import intro from "../../images/intro.png";
const About = () => {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }
  const headingForCCCLine1 = "About Us";
  const contentObj = {
    heading1: { headingForCCCLine1 },
    img: { intro },
    buttonText: "Enter The Site",
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

      <div className="cc-page-wrapper aboutPageWrapper">
        <Sidebar
          sideBar={sideBar}
          marginTopH6="mt3point5rem"
          margintop2rem="margintop2rem"
        />
        <div className="main-area-inner-wrapper">
          <Header header={header} />
          <div className="new-page-content-wrapper mt-4">
            <ContentImageSection obj={contentObj} />
            <div className="about-page-inner-container">
              <div className="ceo-section mt-5">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="about-col-wrapper">
                      <h1 className="site-heading">Meet the Leaders</h1>
                      <h5>
                        CEO cancerClarity <br />
                        Basem S. Goueli MD, PHD MBA
                      </h5>
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem a dicta qui nobis perspiciatis quos accusantium
                        et deserunt, aperiam laborum saepe incidunt veritatis,
                        quaerat dolorum repellat necessitatibus, excepturi
                        debitis in consequatur deleniti. Eius aspernatur modi in
                        laborum ab, minima ipsum dolores adipisci eos, cumque
                        quis, facilis veniam consequatur ratione minus?
                      </p>
                    </div>
                    {/* about-col-wrapper */}
                  </div>
                  <div className="col-lg-6">
                    <div className="ceo-profile-img-section">
                      <div className="img-wrapper">
                        <img src={CEO_img} alt="" />
                      </div>
                      <div className="img-caption-area">
                        <p>
                          CEO CancerClarity
                          <br />
                          Basem S. Goueli MD, PHD MBA
                        </p>
                      </div>
                      {/* img-caption-area */}
                    </div>
                    {/* ceo-profile-img-section */}
                  </div>
                </div>
              </div>
              {/* ceo-section */}

              <div className="team-section mt-5">
                <div className="row">
                  <div className="col-lg-3 mb-4">
                    <div className="team-card-wrapper">
                      <div className="team-img-area">
                        <img src={avatar} alt="" />
                      </div>
                      {/* team-img-area */}
                      <div className="team-caption-area">
                        <p>
                          Muhammad Qasim <br />
                          Chief Data Scientist
                        </p>
                      </div>
                      {/* team-caption-area */}
                    </div>
                    {/* team-card-wrapper */}
                  </div>
                  <div className="col-lg-3 mb-4">
                    <div className="team-card-wrapper">
                      <div className="team-img-area">
                        <img src={avatar} alt="" />
                      </div>
                      {/* team-img-area */}
                      <div className="team-caption-area">
                        <p>
                          Nauman Shah <br />
                          Data Scientist
                        </p>
                      </div>
                      {/* team-caption-area */}
                    </div>
                    {/* team-card-wrapper */}
                  </div>
                  <div className="col-lg-3 mb-4">
                    <div className="team-card-wrapper">
                      <div className="team-img-area">
                        <img src={avatar} alt="" />
                      </div>
                      {/* team-img-area */}
                      <div className="team-caption-area">
                        <p>
                          Syed Hammad Shah <br />
                          Lead full stack developer
                        </p>
                      </div>
                      {/* team-caption-area */}
                    </div>
                    {/* team-card-wrapper */}
                  </div>
                  <div className="col-lg-3 mb-4">
                    <div className="team-card-wrapper">
                      <div className="team-img-area">
                        <img src={avatar} alt="" />
                      </div>
                      {/* team-img-area */}
                      <div className="team-caption-area">
                        <p>
                          Usman Feroz <br />
                          Front end developer
                        </p>
                      </div>
                      {/* team-caption-area */}
                    </div>
                    {/* team-card-wrapper */}
                  </div>
                  <div className="col-lg-3 mb-4">
                    <div className="team-card-wrapper">
                      <div className="team-img-area">
                        <img src={avatar} alt="" />
                      </div>
                      {/* team-img-area */}
                      <div className="team-caption-area">
                        <p>
                          Ayesha shafique<br />
                          Chief Data Scientist
                        </p>
                      </div>
                      {/* team-caption-area */}
                    </div>
                    {/* team-card-wrapper */}
                  </div>
                  <div className="col-lg-3 mb-4">
                    <div className="team-card-wrapper">
                      <div className="team-img-area">
                        <img src={avatar} alt="" />
                      </div>
                      {/* team-img-area */}
                      <div className="team-caption-area">
                        <p>
                          Tabish Irfan <br />
                          Front End Developer
                        </p>
                      </div>
                      {/* team-caption-area */}
                    </div>
                    {/* team-card-wrapper */}
                  </div>
                  <div className="col-lg-3 mb-4">
                    <div className="team-card-wrapper">
                      <div className="team-img-area">
                        <img src={avatar} alt="" />
                      </div>
                      {/* team-img-area */}
                      <div className="team-caption-area">
                        <p>
                          Umair Ahmed <br />
                          Project Manager
                        </p>
                      </div>
                      {/* team-caption-area */}
                    </div>
                    {/* team-card-wrapper */}
                  </div>
                  <div className="col-lg-3 mb-4">
                    <div className="team-card-wrapper">
                      <div className="team-img-area">
                        <img src={avatar} alt="" />
                      </div>
                      {/* team-img-area */}
                      <div className="team-caption-area">
                        <p>
                          Saheeq Ahmed <br />
                          Web Scrapping
                        </p>
                      </div>
                      {/* team-caption-area */}
                    </div>
                    {/* team-card-wrapper */}
                  </div>
                </div>
              </div>
              {/* team-section */}

            <div className="reachUs-section mt-5">
                <h1 className="site-heading">
                    Reach Us
                </h1>
                <div className="row mt-5">
                    <div className="col-lg-6 mb-4">
                        <div className="reachUs-col-wrapper">
                                <h4>Cancer Clarity, New York, USA
                                <br />
                                +1 (507) 990-3394
                                <br />
                                Basemgoueli@gmail.com   
                                </h4>
                        </div>
                    </div>
                    {/* col 6 */}

                    <div className="col-lg-6 mb-4">
                        <div className="reachUs-col-wrapper">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24165.055897091555!2d-74.18011309869655!3d40.79210407667069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c255a5af6d81df%3A0x865bfcf80738f7b4!2sBelleville%2C%20NJ%2C%20USA!5e0!3m2!1sen!2s!4v1666284873634!5m2!1sen!2s"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                    {/* col 6 */}
                </div>
            </div>
            {/* reachUs-section */}


            </div>
          </div>
        </div>
       <img
         src={birds}
         style={{height: "100px", width: "auto",position :"fixed"}}
         class="signup-birds hideInMobile"
         alt=""
       />
       
      </div>
    </>
  );
};

export default About;
