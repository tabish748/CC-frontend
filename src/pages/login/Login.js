import React, { useState , useEffect} from "react";
import logo from "../../images/logo.png";
import signupBirds from "../../images/signup-birds.png";
import signupGround from "../../images/signup-ground.png";
import googleG from "../../images/g.svg";
import "font-awesome/css/font-awesome.min.css";
import { Link } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { GoogleAuth ,FacebookAuth ,TwitterAuth} from "../../firebase/authentication";

function Login() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [state , setState] = useState(0)


  ///form handler ///

  const submit =(event) =>{
    event.preventDefault();
    console.log(email , password)
    asyncCall();
  };


  ///backend call //

  const asyncCall = async () =>{
    const url = "http://127.0.0.1:8000/user/login";

    const data = {
      "email" : email,
      "password" : password,
    };

    console.log(data)

    const requestOptions = {
      method : 'POST',
      headers : {'Content-Type': 'application/json'},
      body : JSON.stringify(data)
    };
    
    let response = await fetch(url,requestOptions);
    let responseData = await response.json();
    console.log(responseData.data.token);
    if (responseData.error ===false && responseData.data.token) {
      sessionStorage.setItem("token" , responseData.data.token)
    }

  }

  /// use effect  /// 
  useEffect(()=>{
    if (sessionStorage.getItem("token")){
      
    }
    console.log(state);
  })

  ///toggle handlers ///
  function handleHeader() {
    setHeader((t) => !t);
  }
  function handleSideBar() {
    setSideBar((t) => !t);
  }

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
              <form action="" className="login-form" onSubmit={submit}>
                <div className="row">
                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="text"
                        name="userName"
                        className="signup-box-input loginfields"
                        placeholder="Email"
                        id=""
                        onChange={(event)=>{setEmail(event.target.value)}}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12 px-1">
                    <div className="input-box-wrapper mb-3">
                      <input
                        type="password"
                        name="password"
                        className="signup-box-input loginfields"
                        placeholder="Password"
                        id=""
                        onChange={(event)=>{setPassword(event.target.value)}}
                      />
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
                            <img src={googleG} alt=""  onClick={GoogleAuth}/>
                          </div>
                        </Link>
                        <Link href="#" target="_blank">
                          <div className="social-icon-circle">
                            <i className="fab fa-instagram"></i>
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

export default Login;
