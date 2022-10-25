import React, { useState } from "react";
import logo from "../../images/logo.png";
import birds from "../../images/birds.png";
import leafs from "../../images/leafs.png";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Header from "../../components/Header/Header";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { call } from "../../redux/slices/contact";
import Swal from 'sweetalert2';

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const ContactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[A-Za-z ]*$/, "Please enter valid name"),
  orginzationName: Yup.string().min(2, "Too Short!").max(50, "Too Long!"),
  role: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[A-Za-z ]*$/, "Please enter valid role"),
  email: Yup.string().email("Invalid email").required("Required"),

  contactNo: Yup.string()
    .matches(phoneRegExp, "Invalid Number")
    .required("required"),
  message: Yup.string().required("required")
});
function ContactUs() {
  const [header, setHeader] = useState(false);
  const [sideBar, setSideBar] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [orginzationName, setOrganizationName] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const dispatch = new useDispatch();
  const submit = (event) => {
    event.preventDefault()
    const payload = {
      "email": email,
      "contact": phone,
      "message": message,
      "first_name": firstName,
      "last_name": lastName,
      "organization": orginzationName,
      "role": role
    }
    dispatch(call(payload))
      .unwrap()
      .then((promiseResult) => {
        if (promiseResult.error === false) {
          Swal.fire({
            title: 'Sucessfull!',
            text: promiseResult.message,
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
        else {
          Swal.fire({
            title: 'Error!',
            text: promiseResult.message,
            icon: 'error',
            confirmButtonText: 'Try again'
          })
        }
      }).catch((serverRejection) => {
        Swal.fire({
          title: 'Error!',
          text: serverRejection.message,
          icon: 'error',
          confirmButtonText: 'Try again'
        })
      })
  }

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
      <div className="contact-section-wrapper">
        <Sidebar
          sideBar={sideBar}
          marginTopH6="mt3point5rem"
          margintop2rem="margintop2rem"
        />
        <div className="contact-inner-parent">
          <Header header={header} />

          <div className="contact-form-main-area">
            <div className="contact-form-wrapper mt-2">
              <h1 class="text-center site-heading">Contact Us</h1>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                }}
                validationSchema={ContactSchema}
                onSubmit={(values) => {
                  // same shape as initial values
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form action="" className="mt-3" onSubmit={submit}>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group mb-2">
                          <label htmlFor="">First Name:</label>
                          <Field
                            name="firstName"
                            className="custom-form-control"
                            onChange={(event) => setFirstName(event.target.value)}
                          />
                          {errors.firstName && touched.firstName ? (
                            <div>
                              <p className="formvalidation-error-text">
                                {errors.firstName}
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group mb-2">
                          <label htmlFor="">Last Name:</label>
                          {/* <input type="text" name="lastName"  /> */}
                          <Field
                            name="lastName"
                            className="custom-form-control"
                            onChange={(event) => setLastName(event.target.value)}
                          />
                          {errors.lastName && touched.lastName ? (
                            <div>
                              <p className="formvalidation-error-text">
                                {errors.lastName}
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group mb-2">
                          <label htmlFor="">Organization Name:</label>
                          <Field
                            className="custom-form-control"
                            name="orginzationName"
                            onChange={(event) => setOrganizationName(event.target.value)}
                          />
                          {errors.orginzationName && touched.orginzationName ? (
                            <div>
                              <p className="formvalidation-error-text">
                                {errors.orginzationName}
                              </p>
                            </div>
                          ) : null}
                          {/* <input type="text"/> */}
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group mb-2">
                          <label htmlFor="">Role:</label>
                          <Field className="custom-form-control" name="role" onChange={(event) => setRole(event.target.value)} />
                          {errors.role && touched.role ? (
                            <div>
                              <p className="formvalidation-error-text">
                                {errors.role}
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group mb-2">
                          <label htmlFor="">Email:</label>
                          <Field className="custom-form-control" name="email" onChange={(event) => setEmail(event.target.value)} />
                          {errors.email && touched.email ? (
                            <div>
                              <p className="formvalidation-error-text">
                                {errors.email}
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>

                      <div className="col-lg-6">
                        <div className="form-group mb-2">
                          <label htmlFor="">Contact Number*:</label>
                          <Field
                            className="custom-form-control"
                            name="contactNo"
                            onChange={(event) => setPhone(event.target.value)}
                          />
                          {errors.contactNo && touched.contactNo ? (
                            <div>
                              <p className="formvalidation-error-text">
                                {errors.contactNo}
                              </p>
                            </div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <label htmlFor="">Brief Description of Inquiry*:</label>
                        <Field
                          as="textarea"
                          cols="30"
                          name="message"
                          rows="6"
                          className="custom-form-control"
                          onChange={(event) => setMessage(event.target.value)}
                        />
                        {errors.message && touched.message ? (
                          <div>
                            <p className="formvalidation-error-text">
                              {errors.message}
                            </p>
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <input
                      type="submit"
                      className="gray-button submit-btn mt-3"
                      style={{ color: "#fff" }}
                      value="Send"
                    />
                  </Form>
                )}
              </Formik>
            </div>
            {/* contact-form-wrapper */}
          </div>
          {/* contact-form-main-area */}
        </div>
        {/* contact-inner-parent */}
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

export default ContactUs;
