import React, { useState } from "react";
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StatsCard from "../../components/statsCard/StatsCard";
import Therapeutics from "./Therapeutics";
import ClinicalTrials from "./ClinicalTrials";
import Table from "react-bootstrap/Table";
import heart from "../../images/heart.svg";
import download from "../../images/download.svg";
function StatsDrugs() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }
  function handleAnalyticTab() {
    document
      .querySelector(".analytics-drug-table-container")
      .classList.add("active");
    document.querySelector("#analytics-Container").classList.add("hide");
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

      <div className="cc-page-wrapper">
        <Sidebar
          sideBar={sideBar}
          marginTopH6="mt3point5rem"
          margintop2rem="margintop2rem"
        />
        <div className="main-area-inner-wrapper">
          <Header header={header} />
          <div className="new-page-content-wrapper mt-4">
            <h1 className="site-heading">Clinical Trial Finder</h1>

            <div className="tabs-drugs-parent mt-4">
              <Tabs>
                <TabList>
                  <Tab>Clinical Trials</Tab>
                  <Tab>Analytics</Tab>
                  <Tab>Therapeutics</Tab>
                </TabList>

                <TabPanel>
                  <div className="tab-content-wrapper-drugs mt-4">
                    <ClinicalTrials />
                  </div>
                </TabPanel>
                <TabPanel>
                  <div
                    className="tab-content-wrapper-drugs mt-4"
                    id="analytics-Container"
                  >
                  <h5 className="blue-text text-center mb-4">Total number of trials: <b>789</b></h5>
                    <div className="row">
                      <div className="col mb-4" onClick={handleAnalyticTab}>
                        <StatsCard
                          text="Number of Unique Drugs"
                          stats="25482"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Unique Mechanism"
                          stats="25482"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Trials by Stage"
                          stats="25482"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Trials by Phase"
                          stats="25482"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Trials by Intervention Type"
                          stats="25482"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Trials by Distance"
                          stats="25482"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Trials by Cancer Types"
                          stats="25482"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Trials by Institution"
                          stats="25482"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Trials by Line of Therapy"
                          stats="25482"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Trials by Genetic Mutation"
                          stats="25482"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="analytics-drug-table-container">
                    <div
                      style={{
                        overflowX: "auto",
                        overflowY: "auto",
                        maxHeight: "370px",
                      }}
                      className="drugstatusTable-wrapper"
                    >
                      <Table hover className="drugsTable">
                        <thead>
                          <tr>
                            <th>S NO</th>
                            <th>DRUGS</th>
                            <th>SPONCOR</th>
                            <th>NO OF TRIALS</th>
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>01</td>
                            <td className="drugName">Name of Drug</td>
                            <td>
                              <p>abc</p>
                            </td>
                            <td>34</td>

                            <td>
                              <button className="blue-button">
                                See Details
                              </button>

                              <img
                                src={download}
                                className="drugstableIcon"
                                alt=""
                              />

                              <img
                                src={heart}
                                className="drugstableIcon"
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>02</td>
                            <td className="drugName">Name of Drug</td>
                            <td>
                              <p>abc</p>
                            </td>
                            <td>34</td>

                            <td>
                              <button className="blue-button">
                                See Details
                              </button>

                              <img
                                src={download}
                                className="drugstableIcon"
                                alt=""
                              />

                              <img
                                src={heart}
                                className="drugstableIcon"
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>03</td>
                            <td className="drugName">Name of Drug</td>
                            <td>
                              <p>abc</p>
                            </td>
                            <td>34</td>

                            <td>
                              <button className="blue-button">
                                See Details
                              </button>

                              <img
                                src={download}
                                className="drugstableIcon"
                                alt=""
                              />

                              <img
                                src={heart}
                                className="drugstableIcon"
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>04</td>
                            <td className="drugName">Name of Drug</td>
                            <td>
                              <p>abc</p>
                            </td>
                            <td>34</td>

                            <td>
                              <button className="blue-button">
                                See Details
                              </button>

                              <img
                                src={download}
                                className="drugstableIcon"
                                alt=""
                              />

                              <img
                                src={heart}
                                className="drugstableIcon"
                                alt=""
                              />
                            </td>
                          </tr>
                          <tr>
                            <td>05</td>
                            <td className="drugName">Name of Drug</td>
                            <td>
                              <p>abc</p>
                            </td>
                            <td>34</td>

                            <td>
                              <button className="blue-button">
                                See Details
                              </button>

                              <img
                                src={download}
                                className="drugstableIcon"
                                alt=""
                              />

                              <img
                                src={heart}
                                className="drugstableIcon"
                                alt=""
                              />
                            </td>
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </div>
                  {/* analytics-drug-table-container */}
                </TabPanel>
                <TabPanel>
                  <div className="tab-content-wrapper-drugs mt-4">
                    <Therapeutics />
                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        <img
          src={birds}
          style={{ height: "100px", width: "auto" }}
          className="signup-birds hideInMobile"
          alt=""
        />
      </div>
    </>
  );
}

export default StatsDrugs;
