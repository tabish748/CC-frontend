import React from 'react';

const Q5 = () => {
  return (
    <>
      <h2>Performance Status & Organ Function</h2>
      <p>Please input the following data</p>

      <label htmlFor="">What is your ECOG performance status? </label>
      <select name="" id="">
        <option value="">Choose below</option>
        <option value="">ECOG 0 with description</option>
        <option value="">ECOG 1 with description</option>
        <option value="">ECOG 2 with description</option>
        <option value="">ECOG 3 with description</option>
        <option value="">ECOG 4 with description</option>
        <option value="">I dont know</option>
      </select>

      <label htmlFor="">What is your Karnosky performance score? </label>
      <select name="" id="">
        <option value="">Choose below</option>
        <option value="">KPS 100 with description</option>
        <option value="">KPS 90 with description</option>
        <option value="">KPS 80 with description</option>
        <option value="">KPS 70 with description</option>
        <option value="">KPS 60 with description</option>
        <option value="">KPS 50 with description</option>
        <option value="">KPS 40 with description</option>
        <option value="">KPS 30 with description</option>
        <option value="">KPS 20 with description</option>
        <option value="">KPS 10 with description</option>
        <option value="">I dont know</option>
      </select>

      <label htmlFor="">What is your kidney function? (enter creatinine) </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter Function"
        id=""
      />
      <label htmlFor="">What is your neutrophil count? (enter) </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter Count"
        id=""
      />
      <label htmlFor="">What is your hemoglobin (enter) </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter hemoglobin"
        id=""
      />
      <label htmlFor="">What is your platelet count? (enter) </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter Count"
        id=""
      />
      <label htmlFor="">What is your AST? </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter AST"
        id=""
      />
      <label htmlFor="">What is your ALT? </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter ALT"
        id=""
      />
      <label htmlFor="">What is your bilirubin? </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter bilirubin"
        id=""
      />
      <label htmlFor="">What is your albumin? </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter albumin"
        id=""
      />
      <label htmlFor="">What is your alkaline phosphatase? </label>
      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter phosphatase"
        id=""
      />
    </>
  );
}

export default Q5;
