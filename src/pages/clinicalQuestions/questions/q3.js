import React, { useEffect, useState } from 'react';

const Q3 = () => {
  const [isInstitution , setIsInstitution] = useState(false)

  useEffect (()=>{
    console.log("render")
  } ,[isInstitution])
  return (
    <>

      <h2>Location</h2>
      <p>Please input the following data</p>

      <label htmlFor="">What city do you live in? (entry) </label>
      <div className="input-box-wrapper mb-3">
        <input
          type="text"
          name="userName"
          className="signup-box-input loginfields"
          placeholder="Enter your city"
          id=""
        />

      </div>

      <label htmlFor="">What's your zip code? (entry) </label>
      <div className="input-box-wrapper mb-3">
        <input
          type="text"
          name="userName"
          className="signup-box-input loginfields"
          placeholder="Enter your zip code"
          id=""
        />

      </div>


      <label htmlFor="">How far are you willing to travel? (entry) </label>
      <div className="input-box-wrapper mb-3">
        <input
          type="text"
          name="userName"
          className="signup-box-input loginfields"
          placeholder="Enter distance in miles"
          id=""
        />

      </div>

      <label htmlFor="">Are you interested in a specific institution? </label>
      <select onChange={(event)=>{
          console.log(event.target.value)
          if(event.target.value == 1){
            setIsInstitution(true);
          }
          if(event.target.value != 1){
            setIsInstitution(false);
          }}
        }>
        <option value="">Chose your option</option>
        <option value="1">yes</option>
        <option value="0">no</option>
      </select>

      { isInstitution ? (
      <>
      <label htmlFor="">Which institution? (entry) </label>
      <div className="input-box-wrapper mb-3">
        <input
          type="text"
          name="userName"
          className="signup-box-input loginfields"
          placeholder="Enter Institution"
          id=""
        /> </div> 
        </>) : null}
      
    </>
  );
}

export default Q3;
