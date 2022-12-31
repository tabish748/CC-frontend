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
import { useDispatch , useSelector } from "react-redux";

// import { Prev } from "react-bootstrap/esm/PageItem";
import { STAGGING_BACKEND, LOCAL_BACKEND } from "../../common/helper";

const useForceRender = () => {
  const [value, setValue] = useState(0);
  return () => setValue((val) => val + 1);
};

function ClinicalQuestion3() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [isInstitution, setIsInstitution] = useState(false);

  const [city,setCity] = useState("");
  const [zipcode,setZipCode] = useState("");
  const [distance,setDistance] = useState("");
  const [institution,setInstitution] = useState("");
  

  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }
  const navigate = useNavigate();
  const selector= useSelector(state => state.options);
  const names = [
    // { text: "Cancer Type & Stage", route: "/clinical-questions" },
    // { text: "Demographics", route: "/clinical-question2" },
    // { text: "Location", route: "/clinical-question3" },
    // { text: "Trial Type & Sponsor", route: "/clinical-question4" },
    // { text: "Functional Status", route: "/clinical-question5" },
    // { text: "Cancer Characteristics", route: "/clinical-question6" },
    // { text: "Molecular Profile", route: "/clinical-question7" },
    // { text: "Treatment History", route: "/clinical-question8" },
    // { text: "Drug & Mechanism", route: "/clinical-question9" },
  ];

selector.options.forEach(element => {
    if (element == "Cancer_Type_&_Stage"){
      names.unshift({text:element , route: "/clinical-questions"})
    }
    if (element == "Demographics"){
      names.unshift({text:element , route: "/clinical-question2"})
    }
    if (element == "Location"){
      names.unshift({text:element , route: "/clinical-question3"})
    }
    if (element == "Trial_Type_&_Sponsor"){
      names.unshift({text:element , route: "/clinical-question4"})
    }
    if (element == "Functional_Status"){
      names.unshift({text:element , route: "/clinical-question5"})
    }
    if (element == "Cancer_Characteristics"){
      names.unshift({text:element , route: "/clinical-question6"})
    }
    if (element == "Molecular_Profile"){
      names.unshift({text:element , route: "/clinical-question7"})
    }
    if (element == "Treatment_History"){
      names.unshift({text:element , route: "/clinical-question8"})
    }
    if (element == "Drug_&_Mechanism"){
      names.unshift({text:element , route: "/clinical-question9"})
    }

});
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
  const OnSubmitForm = async() => {
    const url = STAGGING_BACKEND + "cancer/questionair/location/";
    const payload = {
      "city": city,
      "zipcode": zipcode,
      "distance": distance,
      "specific_institute":institution
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
    navigate("/clinical-question4");
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
                              e.route == "/clinical-question3"
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
                  <h2>Location</h2>
                  <p>Please input the following data</p>

                  <label htmlFor="">What city do you live in? (entry) </label>
                  <div className="input-box-wrapper mb-3">
                    <input
                      type="text"
                      name="userName"
                      className="signup-box-input loginfields"
                      placeholder="Enter your city"
                      id=""
                      onChange={(event)=>setCity(event.target.value)}
                    />
                  </div>

                  <label htmlFor="">What's your zip code? (entry) </label>
                  <div className="input-box-wrapper mb-3">
                    <input
                      type="text"
                      name="userName"
                      className="signup-box-input loginfields"
                      placeholder="Enter your zip code"
                      id=""
                      onChange={(event)=>setZipCode(event.target.value)}
                    />
                  </div>

                  <label htmlFor="">
                    How far are you willing to travel? (entry){" "}
                  </label>
                  <div className="input-box-wrapper mb-3">
                    <input
                      type="text"
                      name="userName"
                      className="signup-box-input loginfields"
                      placeholder="Enter distance in miles"
                      id=""
                      onChange={(event)=>setDistance(event.target.value)}
                    />
                  </div>

                  <label htmlFor="">
                    Are you interested in a specific institution?{" "}
                  </label>
                  <select
                    onChange={(event) => {
                      console.log(event.target.value);
                      if (event.target.value == 1) {
                        setIsInstitution(true);
                      }
                      if (event.target.value != 1) {
                        setIsInstitution(false);
                      }
                    }}
                  >
                    <option value="">Chose your option</option>
                    <option value="1">yes</option>
                    <option value="0">no</option>
                  </select>

                  {isInstitution ? (
                    <>
                      <label htmlFor="">Which institution? (entry) </label>
                      <div className="input-box-wrapper mb-3">
                        <input
                          type="text"
                          name="userName"
                          className="signup-box-input loginfields"
                          placeholder="Enter Institution"
                          id=""
                          onChange={(event)=>setInstitution(event.target.value)}
                        />{" "}
                      </div>
                    </>
                  ) : null}

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

export default ClinicalQuestion3;
