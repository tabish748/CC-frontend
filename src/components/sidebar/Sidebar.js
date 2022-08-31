import React from "react";
import cancerLight from "../../images/cancer-light.png";
import revolution from "../../images/revolution.png";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";

function Sidebar(props) {
  const sidebar = props.sideBar;
  const marginTopH6 = props.marginTopH6;
  const margintop2rem = props.margintop2rem;
  return (
    <div
      className={
        !sidebar ? "sidebar-section hideInLeftInMobile" : "sidebar-section "
      }
    >
      <div className="logo-wrapper hideInMobile">
        <img src={logo} alt="" />
      </div>

      <div className={margintop2rem ?"sidebar-list-area margintop2rem" : "sidebar-list-area"}>
        <ul>
          <li>
            <Link to="#">
              <div className="sidebar-list-bullet"></div>
              Clinincal Trial Finder
            </Link>
          </li>
          <li>
            <Link to="#">
              <div
                className="sidebar-list-bullet"
                style={{ backgroundColor: "#bde7fb" }}
              ></div>
              CC Treatment Guide
            </Link>
          </li>
          <li>
            <Link to="#">
              <div
                className="sidebar-list-bullet"
                style={{ backgroundColor: "#008dd0" }}
              ></div>
              Pharmaceutical Consulting
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="sidebar-list-bullet"></div>
              Cancer Center Consulting
            </Link>
          </li>
          <li>
            <Link to="#">
              <div
                className="sidebar-list-bullet"
                style={{ backgroundColor: "#00dea9" }}
              ></div>
              My Profile
            </Link>
          </li>
        </ul>

        <h6 className={marginTopH6 ?`px-3 mt-4 marginTopH6` :`px-3 mt-4`} style={{ fontWeight: "600" }}>
          Sister Sites
        </h6>

        <ul>
          <li style={{ borderTop: "1px solid #707070", padding: "0" }}>
            <Link to="#">
              <div className="sidebar-list-bullet-img">
                <img src={cancerLight} alt="" />
              </div>
              CancerLight
            </Link>
          </li>
          <li style={{ padding: "0" }}>
            <Link to="#">
              <div className="sidebar-list-bullet-img">
                <img src={revolution} alt="" />
              </div>
              Revolution Cancer
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
