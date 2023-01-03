import React, { useState, useEffect, useCallback } from "react";
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { storeOptions } from "../../redux/slices/clinicalOptions";
import { useDispatch , useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { object } from "yup";
import { STAGGING_BACKEND, LOCAL_BACKEND } from "../../common/helper";
// import { Prev } from "react-bootstrap/esm/PageItem";

const useForceRender = () => {
  const [value, setValue] = useState(0);
  return () => setValue((val) => val + 1);
};


const useForceUpdate = () => {
  const [, setTick] = useState(0);
  const update = useCallback(() => {
    setTick((tick) => tick + 1);
  }, []);
  return update;
};

function ClinicalQuestions() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);
  const [data, setData] = useState([]);
  const [subtypeData, setSubtypeData] = useState([]);
  const [subtypeBData, setSubtypeBData] = useState([]);
  const [subtypeCData, setSubtypeCData] = useState([]);
  const [cancerType, setCancerType] = useState("");
  const [selectedElements, setSelectedElements] = useState([])

  const [tumorType, setTypeType] = useState("");
  const [subtype, setSubType] = useState("");
  const [subtypeB, setSubTypeB] = useState("");
  const [subtypeC, setSubTypeC] = useState("");
  const [stage, setStage] = useState("");

  const navigate = useNavigate();
  const update = useForceUpdate();
  const selector= useSelector(state => state.options);

  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }

  const handleEvent3 = async (item) => {
    const url = STAGGING_BACKEND + "cancer/create/";
    const payload = {
      userId: 4,
      questionId: 3,
      next_question: 4,
      cancertype: cancerType,
      subtypeb: item,
      subtype: subtype
    };
    // setCancerType(item);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "token " + localStorage.getItem("token"),
      },
      body: JSON.stringify(payload),
    };
    const response = await fetch(url, requestOptions);
    // console.log('response is', response)
    const responseData = await response.json();
    setSubtypeCData(responseData.data);
  };

  const handleEvent2 = async (item) => {
    const url = STAGGING_BACKEND + "cancer/create/";
    console.log("cancertype: ", cancerType);
    const payload = {
      userId: 4,
      questionId: 2,
      next_question: 2,
      cancertype: cancerType,
      subtype: item,
    };
    // setCancerType(item);
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
    console.log("tabishhhh", responseData.data);
    setSubtypeBData(responseData.data);
  };

  const handleEvent1 = async (item) => {
    const url = STAGGING_BACKEND + "cancer/create/";
    const payload = {
      userId: 4,
      questionId: 1,
      next_question: 2,
      cancertype: item,
    };
    setCancerType(item);
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
    setSubtypeData(responseData.data);
    setSubtypeCData([])
    setSubtypeBData([])
    document.querySelector('#stagDropdown').value = '';
    document.querySelector('#subtype').value = '';
  };


  useEffect(async () => {
    const url = STAGGING_BACKEND + "cancer/create/";
    const payload = {
      userId: 4,
      questionId: "",
      next_question: 1,
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
    setData(responseData.data);
  }, []);


  const urlParams = new URLSearchParams(window.location.search);
  const myParam = urlParams.get('mode');
  const page = urlParams.get('page');
  let names = [];
    if(myParam === 'full_options')
    {
      console.log('test')
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

  



  const stages = [
    "Stage 0",
    "Stage 1",
    "Stage 1A1",
    "Stage 1A2",
    "Stage 1A3",
    "Stage 1B",
    "Stage 2",
    "Stage 2A",
    "Stage 2B",
    "Stage 3",
    "Stage 3A",
    "Stage 3B",
    "Stage 3C",
    "Stage 4",
    "Stage 4A",
    "Stage 4B",
    "Not Sure",
  ];
  
  const [curSection, setCurSection] = useState(0);

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

  const OnSubmitForm = async () => {
    const url = STAGGING_BACKEND + "cancer/questionair/cancer_type/";
    const payload = {
      tumor_type: tumorType,
      subtype: subtype,
      subtypeB: subtypeB,
      subtypeC: subtypeC,
      stage: stage,
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
    console.log(responseData);
    navigate("/clinical-question2");
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
                              e.route == "/clinical-questions"
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
                  <h2>Cancer Type & Stage</h2>
                  <p>Please input the following data</p>

                  <label htmlFor="">What cancer are you interested in? </label>
                  <select
                    name=""
                    id=""
                    onChange={(item) => {
                      handleEvent1(item.target.value);
                      setTypeType(item.target.value);
                    }}
                  >
                    <option value="">Choose below</option>
                    {data?.map((item) => {
                      return <option value={item}>{item}</option>;
                    })}
                  </select>

                  {subtypeData.length > 0 && (
                    <>
                      <label htmlFor="">What subtype? </label>
                      <select
                        name=""
                        id="subtype"
                        onChange={(item) => {
                          handleEvent2(item.target.value);
                          setSubType(item.target.value);
                        }}
                      >
                        <option value="">Choose below</option>
                        {subtypeData?.map((item) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </select>
                    </>
                  )}

                  {subtypeBData.length > 0 && (
                    <>
                      <label htmlFor="">What subtype B? </label>
                      <select
                        name=""
                        id="subtype2"
                        onChange={(item) => {
                          handleEvent3(item.target.value);
                          setSubTypeB(item.target.value);
                        }}
                      >
                        <option value="">Choose below</option>
                        {subtypeBData?.map((item) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </select>
                    </>
                  )}

                  {subtypeCData.length > 0 && (
                    <>
                      <label htmlFor="">What Subtype C? </label>
                      <select
                        name=""
                        id=""
                        onChange={(event) => { setSubTypeC(event.target.value); }}
                      >
                        <option value="">Choose below</option>
                        {subtypeCData?.map((item) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </select>
                    </>
                  )}

                  {subtypeData.length > 0 && (
                    <>
                      <label htmlFor="">What stage is your cancer? </label>
                      <select
                        name=""
                        id="stagDropdown"
                        onChange={(event) => setStage(event.target.value)}
                      >
                        <option value="">Choose below</option>
                        {stages?.map((item) => {
                          return <option value={item}>{item}</option>;
                        })}
                      </select>
                    </>
                  )}

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

export default ClinicalQuestions;
