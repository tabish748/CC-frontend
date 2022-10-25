import React from "react";
import Table from "react-bootstrap/Table";
import heart from "../../images/heart.svg";
import download from "../../images/download.svg";
const ClinicalTrials = () => {
  return (
    <>
      <div className="d-flex justify-content-end mb-3">
        <button className="blue-button">Download</button>
      </div>
      <div
        style={{ overflowX: "auto", overflowY: "auto", maxHeight: "370px" }}
        className="drugstatusTable-wrapper"
      >
        <Table hover className="drugsTable">
          <thead>
            <tr className="w-100">
              <th>RANK</th>
              <th>SCORE</th>
              <th>DISTANCE</th>
              <th>PHASE</th>
              <th>STATUS</th>
              <th>BRIEF TITLE</th>
              <th>TRIAL DETAILS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td className="drugName">99</td>
              <td>
                <p>10mi</p>
              </td>
              <td>third</td>
              <td>completed</td>
              <td>Lorem ipsum dolor sit amet consectetur, adipisicing.</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>01</td>
              <td className="drugName">99</td>
              <td>
                <p>10mi</p>
              </td>
              <td>third</td>
              <td>completed</td>
              <td>Lorem ipsum dolor sit amet consectetur, adipisicing.</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>02</td>
              <td className="drugName">99</td>
              <td>
                <p>10mi</p>
              </td>
              <td>third</td>
              <td>completed</td>
              <td>Lorem ipsum dolor sit amet consectetur, adipisicing.</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>03</td>
              <td className="drugName">99</td>
              <td>
                <p>10mi</p>
              </td>
              <td>third</td>
              <td>completed</td>
              <td>Lorem ipsum dolor sit amet consectetur, adipisicing.</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>04</td>
              <td className="drugName">99</td>
              <td>
                <p>10mi</p>
              </td>
              <td>third</td>
              <td>completed</td>
              <td>Lorem ipsum dolor sit amet consectetur, adipisicing.</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>
            

          </tbody>
        </Table>
      </div>
    </>
  );
};

export default ClinicalTrials;
