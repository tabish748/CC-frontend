import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { Link, useNavigate } from "react-router-dom";
// import { Prev } from "react-bootstrap/esm/PageItem";

const useForceRender = () => {
  const [value, setValue] = useState(0);
  return () => setValue((val) => val + 1);
};

function ClinicalQuestion9() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }

  const navigate = useNavigate();
  const names = [
    { text: "Cancer Type & Stage", route: "/clinical-questions" },
    { text: "Demographics", route: "/clinical-question2" },
    { text: "Location", route: "/clinical-question3" },
    { text: "Trial Type & Sponsor", route: "/clinical-question4" },
    { text: "Functional Status", route: "/clinical-question5" },
    { text: "Cancer Characteristics", route: "/clinical-question6" },
    { text: "Molecular Profile", route: "/clinical-question7" },
    { text: "Treatment History", route: "/clinical-question8" },
    { text: "Drug & Mechanism", route: "/clinical-question9" },
  ];

  const [curSection, setCurSection] = useState(0);

  const forceUpdate = useForceRender();

  const responsive = {
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 3,
      },
      600: {
        items: 3,
      },
      700: {
        items: 5,
      },
      900: {
        items: 5,
      },

      1000: {
        items: 5,
      },
      1300: {
        items: 9,
      },
    },
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
      <div className="clinical-questions-section">
        <Sidebar
          sideBar={sideBar}
          marginTopH6="mt3point5rem"
          margintop2rem="margintop2rem"
        />
        <div className="clinical-question-inner-parent">
          <Header header={header} />
          <div className="clinical-question-main-area mt-4">
            <h1 className="text-center site-heading">Clinical Trial Finder</h1>
            <div className="slider-wrapper">
              <OwlCarousel
                className="owl-theme"
                margin={6}
                items={9}
                nav={false}
                dots={false}
                {...responsive}
              >
                {names?.map((e, index) => {
                  const isActive = index === curSection;
                  return (
                    <>
                      <Link to={e.route}>
                        <div className="item" key={index}>
                          <div
                            className={` ${
                              e.route == "/clinical-question9"
                                ? "activebtn"
                                : ""
                            } question-tab-button `}
                          >
                            <p>{e.text}</p>
                          </div>
                          {!(names.length - 1 === index) && (
                            <i class="fa-solid fa-arrow-right"></i>
                          )}
                        </div>
                      </Link>
                    </>
                  );
                })}
              </OwlCarousel>
            </div>
            <div className="activeSection-wrapper">
              <div className="question-form-wrapper">
                <form action="">
                  <h2>Drug name & Mechanism of Action</h2>
                  <p>Please input the following data</p>

                  <label htmlFor="">
                    Is there a particular drug you're interested in?{" "}
                  </label>
                  <select name="" id="">
                    <option value="">Choose below</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                  </select>

                  <label htmlFor="">
                    Which drug would you like to know about?{" "}
                  </label>
                  <select name="" id="">
                    <option value="">Choose below</option>
                    <option value="">Drug1</option>
                    <option value="">Drug2</option>
                  </select>

                  <label htmlFor="">
                    Is there a particular mechanism of action you're interested
                    in?{" "}
                  </label>
                  <select name="" id="">
                    <option value="">Choose below</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                  </select>

                  <label htmlFor="">
                    Which mechanism of action are you interested in?{" "}
                  </label>
                  <select name="" id="">
                    <option value="">Choose below</option>
                    <option value="">Yes</option>
                    <option value="">No</option>
                  </select>

                  <div className="questions-both-btn-wrapper">
                 
                    <button className="blue-button" type="button">
                      Finish
                    </button>
                  </div>
                </form>
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
    </>
  );
}

export default ClinicalQuestion9;
