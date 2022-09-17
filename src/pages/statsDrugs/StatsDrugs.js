import React, { useState } from "react";
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import StatsCard from "../../components/statsCard/StatsCard";

function StatsDrugs() {
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
                    <div className="row">
                      <div className="col mb-4">
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
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-content-wrapper-drugs mt-4">
                    <div className="row">
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Unique Drugs"
                          stats="46713"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Unique Mechanism"
                          stats="96734"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Trials by Stage"
                          stats="12573"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Trials by Phase"
                          stats="77432"
                        />
                      </div>
                      <div className="col mb-4">
                        <StatsCard
                          text="Number of Trials by Intervention Type"
                          stats="23561"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col mb-4">
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
                  </div>
                </TabPanel>

                <TabPanel>
                  <div className="tab-content-wrapper-drugs mt-4">
                    <div className="row">
                      <div className="col mb-4">
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
