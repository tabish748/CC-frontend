import React, { useState, useEffect } from "react";
import logo from "../../images/logo.png";
import signupBirds from "../../images/signup-birds.png";
import signupGround from "../../images/signup-ground.png";
import googleG from "../../images/g.svg";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { GoogleAuth, FacebookAuth, TwitterAuth } from "../../firebase/authentication";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { login } from "../../redux/slices/userAuth";
import Swal from 'sweetalert2';
import { Navigate } from "react-router-dom";
import TrialCriteria from "../trailCriteria/trialCriteria";
function Login() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEyeIcon, setShowEyeIcon] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = new useDispatch();
  const response = useSelector((state=>state.userAuth))

  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  ///form handler ///
  var foo = getParameterByName('backToURL'); // "lorem"

  function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return '/';
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

  function showHidePassword() {
    setShowPassword((t) => !t);
  }
  const submit = (event) => {
    event.preventDefault();
    const data = { "email": email,"password": password}
    dispatch(login(data))
      .unwrap()
      .then((originalPromiseResult) => {
        if (originalPromiseResult.error === false) {
          Swal.fire({
            title: 'Sucessful!',
            text: originalPromiseResult.message,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          window.location.href= foo;
        } else {
          Swal.fire({
            title: 'Error!',
            text: originalPromiseResult.message,
            icon: 'error',
            confirmButtonText: 'Try again'
          })}
        }).catch((rejectedValueOrSerializedError) => {
          Swal.fire({
            title: 'SERVER ERROR',
            text: rejectedValueOrSerializedError.message,
            icon: 'error',
            confirmButtonText: 'ok'
          });})

        console.log(response)
  };
  useEffect(() => {
    if (password !== "") {
      setShowEyeIcon(true);
    } else {
      setShowEyeIcon(false);
    }
  }, [password]);
  ///toggle handlers ///
  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }

  if (localStorage.getItem("token")){
    return <Navigate to="/" />
  }
  else{
  return (
    <div>
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

      <div className="signup-section-wrapper">
        <Sidebar sideBar={sideBar} />

        <div className="signup-inner-parent">
          <Header header={header} />

          <div className="signup-form-main-area">
            <div className="signup-form-wrapper mt-5">
              <h1 className="marginZero site-heading">
                Welcome!
              </h1>

              <p className="marginZero BluetextUnderHeading">Sign into your account</p>
              {/* <form action="" className="login-form" onSubmit={submit}> */}
              <form action="" className="login-form" >
                <div className="row">
                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        name="userName"
                        className="signup-box-input loginfields"
                        placeholder="Email"
                        id=""
                        onChange={(event) => { setEmail(event.target.value) }}
                      />
                      
                    </div>
                  </div>

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                         type={showPassword ? "text" : "password"}
                        name="password"
                        className="signup-box-input loginfields"
                        placeholder="Password"
                        id=""
                        onChange={(event) => { setPassword(event.target.value) }}
                      />
                       {showEyeIcon ? (
                        <i
                          className="far fa-eye password-eye-icon"
                          onClick={showHidePassword}
                        ></i>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper d-flex justify-content-center mb-3">
                      <Link href="#" className="text-center forgotPass">
                        Forgot Password?
                      </Link>
                    </div>
                  </div>

                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">

                     <input
                        type="submit"
                        className="gray-button submit-btn w-100"
                        value="SIGN IN"
                        onClick={submit}
                      />
                      <p className="or-txt">or</p>
                      <p className="text-center mt-1">
                        Sign in with Social accounts
                      </p>
                      <div
                        className="d-flex mx-auto"
                        style={{ width: "fit-content" }}
                      >
                        <Link href="#" target="_blank">
                          <div className="social-icon-circle align-items-end" onClick={FacebookAuth}>
                            <i className="fa fa-facebook-f"></i>
                          </div>
                        </Link>
                        <Link href="#" target="_blank">
                          <div
                            className="social-icon-circle"
                            style={{ backgroundColor: "whitesmoke" }}
                          >
                            <img src={googleG} alt="" onClick={GoogleAuth} />
                          </div>
                        </Link>
                        <Link href="#" target="_blank">
                          <div className="social-icon-circle" onClick={TwitterAuth}>
                            <i className="fa-brands fa-twitter"></i>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <img src={signupBirds} className="signup-birds hideInMobile" alt="" />
        <img src={signupGround} className="signup-ground hideInMobile" alt="" />
      </div>
    </div>
  );
  }
}

export default Login;
