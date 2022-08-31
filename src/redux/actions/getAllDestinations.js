import axios from "axios";

export const getAllDestinations = () => async (dispatch) =>{
    const response = await axios.get('http://localhost:5000/destinations');
    dispatch({
        type:'ALL_DESTINATIONS',
        payload:response.data
    })
}