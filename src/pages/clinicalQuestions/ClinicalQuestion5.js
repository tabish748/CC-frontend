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
import { STAGGING_BACKEND, LOCAL_BACKEND } from "../../common/helper";
// import { Prev } from "react-bootstrap/esm/PageItem";

const useForceRender = () => {
  const [value, setValue] = useState(0);
  return () => setValue((val) => val + 1);
};

function ClinicalQuestion5() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const[ecog , setEcog] = useState("");
  const[karnosky , setKarnosky] = useState("");
  const[kidneyFunction , setKidneyFunction] = useState("");
  const[neutrophil , setNeutrophil] = useState("");
  const[hemoglobin , setHemoglobin] = useState("");
  const[plateletCount , setPlateletCount] = useState("");
  const[ast , setAst] = useState("");
  const[alt , setAlt] = useState("");
  const[bilirubin , setBilirubin] = useState("");
  const[albumin , setAlbumin] = useState("");
  const[ alkalinePhosphatase , setAlkalinePhosphatase] = useState("");

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

  const OnSubmitForm = async () => {
    const url = STAGGING_BACKEND + "cancer/questionair/functional-status/";
    const payload = {
      "ecog_perf": ecog,
      "karnosky_perf": karnosky,
      "kidney_func": kidneyFunction,
      "neutrophil": neutrophil,
      "hemoglobin": hemoglobin,
      "platelet_count": plateletCount,
      "ast": ast,
      "alt": alt,
      "bilirubin": bilirubin,
      "albumin": albumin,
      "alkaline_phostate": albumin,
    };
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token " + localStorage.getItem("token"),
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(url, requestOptions);
    const responseData = await response.json();
    console.log(responseData)
    navigate("/clinical-question6");
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
                              e.route == "/clinical-question5"
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
                    
                <h2>Performance Status & Organ Function</h2>
      <p>Please input the following data</p>

      <label htmlFor="">What is your ECOG performance status? </label>
      <select name="" id="" onChange={(event)=>{setEcog(event.target.value)}}>
        <option value="">Choose below</option>
        <option value="">ECOG 0 with description</option>
        <option value="">ECOG 1 with description</option>
        <option value="">ECOG 2 with description</option>
        <option value="">ECOG 3 with description</option>
        <option value="">ECOG 4 with description</option>
        <option value="">I dont know</option>
      </select>

      <label htmlFor="">What is your Karnosky performance score? </label>
      <select name="" id="" onChange={(event)=>{setKarnosky(event.target.value)}}>
        <option value="">Choose below</option>
        <option value="">KPS 100 with description</option>
        <option value="">KPS 90 with description</option>
        <option value="">KPS 80 with description</option>
        <option value="">KPS 70 with description</option>
        <option value="">KPS 60 with description</option>
        <option value="">KPS 50 with description</option>
        <option value="">KPS 40 with description</option>
        <option value="">KPS 30 with description</option>
        <option value="">KPS 20 with description</option>
        <option value="">KPS 10 with description</option>
        <option value="">I dont know</option>
      </select>

      <label htmlFor="">What is your kidney function? (enter creatinine) </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter Function"
        id=""
        onChange={(event)=>{setKidneyFunction(event.target.value)}}
      />
      <label htmlFor="">What is your neutrophil count? (enter) </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter Count"
        id=""
        onChange={(event)=>{setNeutrophil(event.target.value)}}
      />
      <label htmlFor="">What is your hemoglobin (enter) </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter hemoglobin"
        id=""
        onChange={(event)=>{setHemoglobin(event.target.value)}}
      />
      <label htmlFor="">What is your platelet count? (enter) </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter Count"
        id=""
        onChange={(event)=>{setPlateletCount(event.target.value)}}
      />
      <label htmlFor="">What is your AST? </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter AST"
        id=""
        onChange={(event)=>{setAst(event.target.value)}}
      />
      <label htmlFor="">What is your ALT? </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter ALT"
        id=""
        onChange={(event)=>{setAlt(event.target.value)}}
      />
      <label htmlFor="">What is your bilirubin? </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter bilirubin"
        id=""
        onChange={(event)=>{setBilirubin(event.target.value)}}
      />
      <label htmlFor="">What is your albumin? </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter albumin"
        id=""
        onChange={(event)=>{setAlbumin(event.target.value)}}
      />
      <label htmlFor="">What is your alkaline phosphatase? </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter phosphatase"
        id=""
        onChange={(event)=>{setAlkalinePhosphatase(event.target.value)}}
      />


<div className="questions-both-btn-wrapper">
                    <button
                      className="blue-button"
                      onClick={OnSubmitForm}
                      type="button"
                    >
                      Next
                    </button>

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

export default ClinicalQuestion5;
