import { stringToByteArray } from '@firebase/util';
import React, {useEffect, useState} from 'react';
import Select from 'react-select'




const Q2 = () => {
  
  // const [selectedItems, setSelectedItems] = useState([])
  const [showdropDown, setShowdropDown] = useState(false)
  const [selectedItem, setSelectedItem] = useState()

const options = [
  {value: 'tabish', 'text':'tabish'},
  {value: 'arslan', 'text':'arslan'},
  {value: 'farid', 'text':'farid'},
]

let selected_options=[];

function Handle_Click_Item(selected)
{
  const index = selected_options.indexOf(selected);
  if(index > -1)
  {
   const data = selected_options.splice(index, 1);
    setSelectedItem(false)
  }
  else{
    selected_options.push(selected);
    // setSelectedItem(true)
  }
  
  console.log(selected_options)
}

useEffect(()=>{
console.log('render')
}, [JSON.stringify(selected_options)])

    return (
        <>
          
          <h2>Demographics</h2>
          <p>Please input the following data</p>

          <label htmlFor="">Identify Tumor Type: </label>
          {/* <Select options={options} isMulti ={true} classNamePrefix /> */}
          <div className='custom_multi_selector_container'>
            <div className={"label_area" } onClick={() => setShowdropDown((t) => !t)}>  
              Choose Options   
            </div> 
            {
              showdropDown && <div className="custom_dropdown_container">
                {
                  options.map((e)=>{
                    return <div onClick={()=> Handle_Click_Item(e)} className={'custom_multiselect_item'} >
                      <p>{e.text}</p>
                    </div>
                  })
                }
              </div>
            }
          </div>

            <div className='fff'>
            {
             
              selected_options?.map((e)=>{
                return <p>{e.text}</p>
              })
            }
            </div>
        </>
    );
}

export default Q2;
