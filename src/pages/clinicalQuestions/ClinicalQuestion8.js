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
import { useDispatch , useSelector } from "react-redux";

const useForceRender = () => {
  const [value, setValue] = useState(0);
  return () => setValue((val) => val + 1);
};

function ClinicalQuestion8() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }
  const selector= useSelector(state => state.options);
  const navigate = useNavigate();

  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('mode');
  const page = urlParams.get('page');
  let names = [];
    if(myParam === 'full_options')
    {
      names = [
        { text: "Cancer Type & Stage", route: "/clinical-questions?mode=full_options&page=ccTreatmentGuide" },
        { text: "Demographics", route: "/clinical-question2?mode=full_options&page=ccTreatmentGuide" },
        { text: "Location", route: "/clinical-question3?mode=full_options&page=ccTreatmentGuide" },
        { text: "Trial Type & Sponsor", route: "/clinical-question4?mode=full_options&page=ccTreatmentGuide" },
        { text: "Functional Status", route: "/clinical-question5?mode=full_options&page=ccTreatmentGuide" },
        { text: "Cancer Characteristics", route: "/clinical-question6?mode=full_options&page=ccTreatmentGuide" },
        { text: "Molecular Profile", route: "/clinical-question7?mode=full_options&page=ccTreatmentGuide" },
        { text: "Treatment History", route: "/clinical-question8?mode=full_options&page=ccTreatmentGuide" },
        { text: "Drug & Mechanism", route: "/clinical-question9?mode=full_options&page=ccTreatmentGuide" },
      ];
    }
    else{
      selector.options.forEach(element => {
        if (element == "Cancer_Type_&_Stage"){
          element = 'Cancer Type & Stage';
          names.unshift({text:element , route: "/clinical-questions"})
        }
        if (element == "Demographics"){
          element = 'Demographics';
          names.unshift({text:element , route: "/clinical-question2"})
        }
        if (element == "Location"){
          element = 'Location';
          names.unshift({text:element , route: "/clinical-question3"})
        }
        if (element == "Trial Type & Sponsor"){
          element = 'Location';
          names.unshift({text:element , route: "/clinical-question4"})
        }
        if (element == "Functional_Status"){
          element = 'Functional Status';
          names.unshift({text:element , route: "/clinical-question5"})
        }
        if (element == "Cancer_Characteristics"){
          element = 'Cancer Characteristics';
          names.unshift({text:element , route: "/clinical-question6"})
        }
        if (element == "Molecular_Profile"){
          element = 'Molecular Profile';
          names.unshift({text:element , route: "/clinical-question7"})
        }
        if (element == "Treatment_History"){
          element = 'Treatment History';
          names.unshift({text:element , route: "/clinical-question8"})
        }
        if (element == "Drug_&_Mechanism"){
          element = 'Drug & Mechanism';
          names.unshift({text:element , route: "/clinical-question9"})
        }
    
    });

    }

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

  const OnSubmitForm = () => {


    
    navigate("/clinical-question9");
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
          <h1 className="text-center site-heading">
            {page ==='ccTreatmentGuide' ? 'CC Treatment Guide' : 'Clinical Trial Finder'}
            </h1>
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
                              e.route == "/clinical-question8"
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
                  <h2>Cancer Treatment History</h2>
                  <p>Please input the following data</p>

                  <label htmlFor="">
                    Have you been treated for your cancer?{" "}
                  </label>
                  <select name="" id="">
                    <option value="">Choose below</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>

                  <label htmlFor="">
                    What treatment did you receive first? (see attached sheet
                    for options){" "}
                  </label>
                  <select name="" id="">
                    <option value="">Choose below</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>

                  <label htmlFor="">
                    What treatment did you receive second? (see attached sheet
                    for options){" "}
                  </label>
                  <select name="" id="">
                    <option value="">Choose below</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>

                  <label htmlFor="">
                    What treatment did you receive third? (see attached sheet
                    for options){" "}
                  </label>
                  <select name="" id="">
                    <option value="">Choose below</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>

                  <label htmlFor="">
                    {" "}
                    What treatment did you receive fourth? (see attached sheet
                    for options){" "}
                  </label>
                  <select name="" id="">
                    <option value="">Choose below</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>

                  <label htmlFor="">
                    {" "}
                    What treatment did you receive fifth? (see attached sheet
                    for options){" "}
                  </label>
                  <select name="" id="">
                    <option value="">Choose below</option>
                    <option value="">1</option>
                    <option value="">2</option>
                  </select>

                  <div className="questions-both-btn-wrapper">
                    <button
                      className="blue-button"
                      onClick={OnSubmitForm}
                      type="button"
                    >
                      Next
                    </button>
                    <Link to="/stats-drugs">
                      <button className="blue-button finish-button" type="button">
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

export default ClinicalQuestion8;
