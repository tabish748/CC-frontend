import React from 'react';

const Q6 = () => {
    return (
        <>
        <h2>Cancer Characteristics</h2>
        <p>Please input the following data</p>

        <label htmlFor="">Is your cancer PD-L1 positive? </label>
        <select name="" id="">
          <option value="">Choose below</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
        <label htmlFor="">What % positive or what is the CPS/TPS score?  (enter numerical) </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter score"
        id=""
      />

        <label htmlFor="">Does your cancer have high microsatellite instability? (MSI-high) </label>
        <select name="" id="">
          <option value="">Choose below</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>


        <label htmlFor="">Does your cancer have high tumor mutation burden (TMB-high)? </label>
        <select name="" id="">
          <option value="">Choose below</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
        <label htmlFor="">Does your cancer have an actionable mutation? </label>
        <select name="" id="">
          <option value="">Choose below</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
        <label htmlFor="">Do you have measurable cancer (metastases greater than 1 cm)? </label>
        <select name="" id="">
          <option value="">Choose below</option>
          <option value="">Yes</option>
          <option value="">No</option>
        </select>
      </>
    );
}

export default Q6;
