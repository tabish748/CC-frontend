import React from "react";
import { Link } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css'; //import in react app
import { Navigate } from "react-router-dom";


function Header(props) {
  const header = props.header;
  let isLogged = false
  if (localStorage.getItem("user")) {
     isLogged = true;
  }

  const handleLogout = () =>{
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    window.location.reload(true);

  }
  return (
    <div
      className={
        !header ? "signup-header-area headerHideinMobile" : "signup-header-area"
      }
    >
      <div className="signup-header-content-wrapper">
        <div className="d-flex align-items-center">
          <div className="content-wrapper w-auto h-auto">
            <i className="fas fa-user" style={{ marginRight: "5px" }}></i>
            {!isLogged ? (<Link to="/login" className="registration-links" style={{ marginRight: "4px" }}>
              SIGN IN
            </Link>) : (<Link to="#" className="registration-links" style={{ marginRight: "4px" }}>
            {localStorage.getItem("user")}
            </Link>)}
            
            &nbsp;
            <span style={{ color: "#707070" }}>|</span>
            &nbsp;&nbsp;
            {!isLogged ? ( <Link to="/signup" className="registration-links">
              SIGN UP
            </Link>) : ( <Link to="#" className="registration-links" onClick={handleLogout}>
              SIGN OUT
            </Link>)}
          </div>
        </div>
        <div>
          <input type="search" className="search-box" placeholder="SEARCH" />
        </div>
        <div className="d-flex align-items-center">
          <div className="content-wrapper px-2">
            <Link to="/contactus" className="gray-button">
              Contact Us
            </Link>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <div className="content-wrapper">
            <Link to="" className="gray-button">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
