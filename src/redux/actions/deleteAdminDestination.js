import axios from "axios";

export const deleteAdminDestination = (id) => async (dispatch) =>{
    const response = await axios.delete(`http://localhost:5000/destination/delete/${id}`);
    dispatch({
        type:'DELETE_DESTINATION',
        payload:response.message
    })
}