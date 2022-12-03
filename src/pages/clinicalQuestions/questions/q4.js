import React, { useEffect, useState } from 'react';

const Q4 = () => {
  const [isDrug, setIsDrug] = useState(false);
  const [isDevice, setIsDevice] = useState(false);
  return (
    <>

      <h2>Trial Type & Sponcer</h2>
      <p>Please input the following data</p>

      <label htmlFor="">What type of trial are you interested in? </label>
      <select name="" id="">
        <option value="">Choose below</option>
        <option value="">Drug </option>
        <option value="">Medical Device</option>
        <option value="">Observational</option>
        <option value="">Screening</option>
        <option value="">Imaging</option>
      </select>

      <label htmlFor="">Are you interested in a specific drug? </label>
      <select name="" id="" onChange={(event) => {
        if (event.target.value == 1) {
          setIsDrug(true);
        }
        if (event.target.value != 1) {
          setIsDrug(false);
        }
      }}>
        <option value="">Choose below</option>
        <option value="1">yes </option>
        <option value="0">no</option>

      </select>
      {
        isDrug ? (
          <>
            <label htmlFor="">What is the name fo the drug you're interested in? (enter) </label>
            <input
              type="text"
              name="userName"
              className="signup-box-input loginfields"
              placeholder="Enter drug"
              id=""
            /> </>) : null

      }

      <label htmlFor="">Are you interested in a specific medical device? </label>
      <select name="" id="" onChange={(event) => {
        if (event.target.value == 1) {
          setIsDevice(true);
        }
        if (event.target.value != 1) {
          setIsDevice(false);
        }
      }}>
        <option value="">Choose below</option>
        <option value="1">yes </option>
        <option value="0">no</option>

      </select>

      {
        isDevice ? (
          <>
            <label htmlFor="">What is the name of the medical device  you're interested in? (enter) </label>
            <input
              type="text"
              name="userName"
              className="signup-box-input loginfields"
              placeholder="Enter device"
              id=""
            />
          </>) : null
      }

      <label htmlFor="">What phase trial are you intersted in? </label>
      <select name="" id="">
        <option value="">Choose below</option>
        <option value="">Phase 1</option>
        <option value="">Phase 2</option>
        <option value="">Phase 3</option>
        <option value="">Phase 4</option>
        <option value="">Any</option>
      </select>


      <label htmlFor="">What trial satus are you looking for? </label>
      <select name="" id="">
        <option value="">Choose below</option>
        <option value="">Actively recruiting/enrolling</option>
        <option value="">Active, but not recruiting</option>
        <option value="">Terminated</option>
        <option value="">Completed</option>
        <option value="">Suspended</option>
        <option value="">all</option>
      </select>
    </>
  );
}

export default Q4;
