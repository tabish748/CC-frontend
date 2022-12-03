
import React, { useEffect, useState } from 'react';

const Q2 = () => {

  // const [selectedItems, setSelectedItems] = useState([])
  const [showdropDown, setShowdropDown] = useState(false)
  const [showdropDown2, setShowdropDown2] = useState(false)
  const [selectedItem, setSelectedItem] = useState([])

  const options = [
    { value: '1', 'text': 'Male' },
    { value: '2', 'text': 'Female' },
    { value: '3', 'text': 'Neither' },
    { value: '4', 'text': 'I prefer not to say' },
  ]

  const race_options = [
    { value: '1', 'text': 'White (North American/European)' },
    { value: '2', 'text': 'White (Middle Eastern/North African)' },
    { value: '3', 'text': 'Black (African American and Continental Africa)' },
    { value: '4', 'text': 'Asian' },
    { value: '4', 'text': 'Hispanic' },
    { value: '4', 'text': 'I prefer not to say' },
  ]


  function Handle_Click_Item(selected) {
    const selected_options = Object.assign([], selectedItem);
    console.log("clone", selected_options)
    console.log("selected", selected)
    const index = selected_options.indexOf(selected);
    console.log(index)
    if (index > -1) {
      const data = selected_options.splice(index, 1);
      console.log("after removing", selected_options);
    }
    else {
      selected_options.push(selected);
      // setSelectedItem(true)
    }

    setSelectedItem(selected_options);
    console.log("final", selectedItem)
  }

  useEffect(() => {
    console.log('render')
  }, [selectedItem])

  return (
    <>

      <h2>Demographics</h2>
      <p>Please input the following data</p>

      <label htmlFor="">What gender do you identify with? </label>
      {/* <Select options={options} isMulti ={true} classNamePrefix /> */}
      <div className='custom_multi_selector_container'>
        <div className={"label_area"} onClick={() => setShowdropDown((t) => !t)}>
          Choose Options
        </div>
        {
          showdropDown && <div className="custom_dropdown_container">
            {
              options.map((e) => {
                return <div onClick={() => Handle_Click_Item(e)} className={'custom_multiselect_item'} >
                  <p>{e.text}</p>
                </div>
              })
            }
          </div>
        }
      </div>

      <label htmlFor="">How old are you? (numerical entry) </label>
      {/* <Select options={options} isMulti ={true} classNamePrefix /> */}

      <input
        type="text"
        name="userName"
        className="signup-box-input loginfields"
        placeholder="Enter your age"
        id=""
      />



      <label htmlFor="">What race do you identify with? </label>
      {/* <Select options={options} isMulti ={true} classNamePrefix /> */}
      <div className='custom_multi_selector_container'>
        <div className={"label_area"} onClick={() => setShowdropDown2((t) => !t)}>
          Choose Options
        </div>
        {
          showdropDown2 && <div className="custom_dropdown_container">
            {
              race_options.map((e) => {
                return <div onClick={() => Handle_Click_Item(e)} className={'custom_multiselect_item'} >
                  <p>{e.text}</p>
                </div>
              })
            }
          </div>
        }
      </div>





      {/* <div className='fff'>
            {
             
              // selectedItem.map((e)=>{
              //   return <p>{e.text}</p>
              // })
            }
            </div> */}
    </>
  );
}

export default Q2;
