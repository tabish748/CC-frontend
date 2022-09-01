import axios from "axios";

export const deleteEventById = (id) => async (dispatch) =>{
    const response = await axios.delete(`http://localhost:5000/events/delete/${id}`);
    dispatch({
        type:'DELETE_EVENT',
        payload:response.message
    })
}