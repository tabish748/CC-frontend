

import axios from 'axios';
export const getUserById = (id) => async (dispatch) => {
    console.log('uid is:',id)
    const response = await axios.get(`http://localhost:5000/user/byId/${id}`);
    dispatch({
        type:'SINGLE_USER',
        payload:response.data
    })
    console.log("getUserById:", response.data)
  }
  