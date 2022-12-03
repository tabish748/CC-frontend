import React, { useEffect, useState } from 'react';

import { STAGGING_BACKEND , LOCAL_BACKEND} from '../../../common/helper';
const Q1 = () => {
  const [data,setData] = useState([]);
  const [subtypeData,setSubtypeData] = useState([]);
  const [subtypeBData,setSubtypeBData] = useState([]);
  const[cancerType, setCancerType] = useState("");

  const handleEvent2 = async (item) => {
    const url = LOCAL_BACKEND+"cancer/create/";
    const payload = {
      "userId":4,
      "questionId": 2,
      "next_question": 2,
      "cancertype":cancerType,
      "subtype":item

    }
    setCancerType(item);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };

    const response = await fetch(url, requestOptions);
    const responseData = await response.json();
    setSubtypeBData(responseData.data)
  }


  const handleEvent1 = async (item) => {
    const url = LOCAL_BACKEND+"cancer/create/";
    const payload = {
      "userId":4,
      "questionId": 1,
      "next_question": 2,
      "cancertype":item
    }
    setCancerType(item);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };

    const response = await fetch(url, requestOptions);
    const responseData = await response.json();
    setSubtypeData(responseData.data)
  }

  useEffect( async ()=>{
    const url = LOCAL_BACKEND+"cancer/create/";
    const payload = {
      "userId":4,
      "questionId": "",
      "next_question": 1
    }
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };

    const response = await fetch(url, requestOptions);
    const responseData = await response.json();
    setData(responseData.data)
  },[])

  console.log(data);
  console.log(subtypeData)

    return (
        <>
          
        <h2>Cancer Type & Stage</h2>
        <p>Please input the following data</p>

        <label htmlFor="">What cancer are you interested in? </label>
        <select name="" id="" onChange={(item) => handleEvent1(item.target.value)}>
        <option value="">Choose below</option>
          {data?.map((item)=>{
            return <option value={item}>{item}</option>
          })}

        </select>

        <label htmlFor="">What subtype? </label>
        <select name="" id="subtype"  onChange={(item) => handleEvent2(item.target.value)}>
          <option value="">Choose below</option>
          {subtypeData?.map((item)=>{
            return <option value={item}>{item}</option>
          })}

        </select>


        <label htmlFor="">What subtype B? </label>
        <select name="" id="subtype2">
          <option value="">Choose below</option>
          {subtypeBData?.map((item)=>{
            return <option value={item}>{item}</option>
          })}

        </select>

        <label htmlFor="">What stage is your cancer? </label>
        <select name="" id="">
          <option value="">Choose below</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>

        <label htmlFor="">What risk category is your disease in? </label>
        <select name="" id="">
          <option value="">Choose below</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>

        <label htmlFor="">What is the resectability status of your cancer? </label>
        <select name="" id="">
          <option value="">Choose below</option>
          <option value="">1</option>
          <option value="">2</option>
        </select>
      </>
    );
}

export default Q1;
