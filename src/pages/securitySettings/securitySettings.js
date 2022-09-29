import React, { useState } from "react";
import logo from "../../images/logo.png";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import securitySettings from "../../images/security-settings.png";
import { useDispatch } from "react-redux";
import {edit_profile} from '../../redux/actions/edit_profile_action';

const SecuritySettings = () => {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const dispatch = new useDispatch();

  /// states for attributes ////
  const [email , setEmail] = useState("");
  const [username , setUserName] = useState("");
  const [oldPassword , setOldPassword] = useState("");
  const [newPassword , setNewPassword] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();
    let data = {}
    if (email !== ""){
      data["email"] = email
    }
    if (username !== ""){
      data["username"] = username
    }
    if (oldPassword !== ""){
      data["old_password"] = oldPassword
    }
    if (newPassword !== ""){
      data["new_password"] = newPassword
    }
    dispatch(edit_profile(data));
  }
  ///


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
            <h1 className="site-heading">Security Settings</h1>
            <div className="security-settings-parent w-100 mt-4">
              <div className="row">
                <div className="col-lg-6">
                  <div className="security-settings-form-wrapper">
                    <form action="">
                    <h2 className="mt-2">Change Password</h2>
                      <label htmlFor="">Old Password:</label>
                      <input
                        type="password"
                        className="custom-form-control mb-2"
                        onChange={(event)=> setOldPassword(event.target.value)}
                      />

                      <label htmlFor="">New Password:</label>
                      <input
                        type="password"
                        className="custom-form-control  mb-2"
                        onChange={(event)=>setNewPassword(event.target.value)}
                      />

                      <div className="form-btns-wrapper">
                      <input
                          type="button"
                          value="Cancel"
                          className="gray-button"
                        />

                        <input
                          type="submit"
                          value="Save"
                          className="blue-button"
                          onClick={handleSubmit}
                        />
                        
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-6">
                    <img src={securitySettings} className="w-100" alt="" />
                </div>
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
};

export default SecuritySettings;
