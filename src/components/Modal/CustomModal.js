import React from 'react';
import { Link } from 'react-router-dom';
const CustomModal = () => {
    return (
        <div className='modal-section'>
            <div className="modal-wrapper">
            <p>Please Login or Sign Up to continue  your Cancer Clarity Journey</p>
          <div className='modal-btns-wrapper'>

        <Link to='/login'>
        <button className='blue-button'> 
                Login
            </button>
        </Link>
            <p>or</p>
           <Link to='/signup'>
           <button className='blue-button'>
                SignUp
            </button>
           </Link>
          </div>
            </div>  
        </div>
    );
}

export default CustomModal;
