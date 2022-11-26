import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
const CustomModal = () => {
    const navigate = useNavigate();
    const goToPosts = () => navigate(`/login?backToURL=${window.location.pathname}`);
    console.log(window.location.pathname)

    return (
        <div className='modal-section'>
            <div className="modal-wrapper">
            <p>Please Login or Sign Up to continue  your Cancer Clarity Journey</p>
          <div className='modal-btns-wrapper'>

        {/* <Link to='/login'> */}
        <button onClick={goToPosts} className='blue-button'> 
                Login
            </button>
        {/* </Link> */}
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
