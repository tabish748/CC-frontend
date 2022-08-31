import axios from 'axios';
export const postDestination = (input) => async (dispatch) => {
    const response = await axios.post(`http://localhost:5000/destination/new`,input);
    dispatch({
        type:'POST_DESTINATION',
        payload:response.data.message
    })
    console.log("postdestination is:", response.data.message)
  }
  