import axios from 'axios';
export const getTransportPackageById = (id) => async (dispatch) => {
    console.log('uid is:',id)
    const response = await axios.get(`http://localhost:5000/transport/getPackageByTransporter/${id}`, {withCredentials: true, credentials:'include'});
    dispatch({
        type:'PACKAGES',
        payload:response.data
    })
    console.log("useraction:", response.data)
  }
  