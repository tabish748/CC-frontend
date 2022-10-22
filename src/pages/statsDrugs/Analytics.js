import React from "react";
import Table from "react-bootstrap/Table";
import heart from "../../images/heart.svg";
import download from "../../images/download.svg";
const Analytics = () => {
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
              <th>S No</th>
              <th>Drugs</th>
              <th>Sponsor</th>
              <th>No of Trials</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td className="drugName">Name of Drug</td>
              <td>
                <p>xyz</p>
              </td>
              <td>34</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td className="drugName">Name of Drug</td>
              <td>
                <p>xyz</p>
              </td>
              <td>34</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>2</td>
              <td className="drugName">Name of Drug</td>
              <td>
                <p>xyz</p>
              </td>
              <td>34</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td className="drugName">Name of Drug</td>
              <td>
                <p>xyz</p>
              </td>
              <td>34</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td className="drugName">Name of Drug</td>
              <td>
                <p>xyz</p>
              </td>
              <td>34</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td className="drugName">Name of Drug</td>
              <td>
                <p>xyz</p>
              </td>
              <td>34</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>6</td>
              <td className="drugName">Name of Drug</td>
              <td>
                <p>xyz</p>
              </td>
              <td>34</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>7</td>
              <td className="drugName">Name of Drug</td>
              <td>
                <p>xyz</p>
              </td>
              <td>34</td>
              <td>
                <button className="blue-button">See Details</button>

                <img src={download} className="drugstableIcon" alt="" />

                <img src={heart} className="drugstableIcon" alt="" />
              </td>
            </tr>

            <tr>
              <td>8</td>
              <td className="drugName">Name of Drug</td>
              <td>
                <p>xyz</p>
              </td>
              <td>34</td>
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

export default Analytics;
