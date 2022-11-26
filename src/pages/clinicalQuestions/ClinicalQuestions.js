import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Q1 from "./questions/q1";
import Q2 from "./questions/q2";
import Q3 from "./questions/q3";
import Q4 from "./questions/q4";
import Q5 from "./questions/q5";
import Q6 from "./questions/q6";
import Q7 from "./questions/q7";
import Q8 from "./questions/q8";
import Q9 from "./questions/q9";
import { Link } from "react-router-dom";
// import { Prev } from "react-bootstrap/esm/PageItem";

const useForceRender = () => {
  const [value, setValue] = useState(0);
  return () => setValue((val) => val + 1);
};

function ClinicalQuestions() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }

  const renderActiveSections = () => {
    switch (curSection) {
      case 0:
        return <Q1 />;

      case 1:
        return <Q2 />;

      case 2:
        return <Q3 />;

      case 3:
        return <Q4 />;

      case 4:
        return <Q5 />;

      case 5:
        return <Q6 />;

      case 6:
        return <Q7 />;

      case 7:
        return <Q8 />;

      case 8:
        return <Q9 />;

      default:
        console.log("default");
        break;
    }
  };

  const names = [
    "Cancer Type & Stage",
    "Demographics",
    "Location",
    "Trial Type & Sponsor",
    "Functional Status",
    "Cancer Characteristics",
    "Molecular Profile",
    "Treatment History",
    "Drug & Mechanism ",
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
        items:5,
      },
      
      1000: {
        items: 5,
      },
      1300:{
        items: 9,
      }
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
                      <div className="item" key={index}>
                        <div
                          onClick={() => {
                            setCurSection(index);
                            setTimeout(() => {
                              forceUpdate();
                            }, 100);
                          }}
                          className={` ${
                            isActive ? "activebtn" : ""
                          } question-tab-button `}
                        >
                          <p>{e}</p>
                        </div>
                        {!(names.length - 1 === index) && (
                          <i class="fa-solid fa-arrow-right"></i>
                        )}
                      </div>
                    </>
                  );
                })}
              </OwlCarousel>
            </div>
            <div className="activeSection-wrapper">
              <div className="question-form-wrapper">
                <form action="">
                  {renderActiveSections()}
                  <div className="questions-both-btn-wrapper">
                  <Link>
                  <button
                      className="blue-button"
                      onClick={() => {
                        setCurSection((prev) => {
                          console.log("prev", prev);
                          if (prev < names.length - 1) {
                            prev = prev + 1;
                          } else {
                            prev = 0;
                          }
                          return prev;
                        });
                        setTimeout(() => {
                          forceUpdate();
                        }, 100);
                      }}
                      type="button"
                    >
                      Next
                    </button>
                  </Link>
                    <Link to='/stats-drugs'>
                    <button className="blue-button" type="button" >
                      Finish
                    </button>
                    </Link>
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

export default ClinicalQuestions;
