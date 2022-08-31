import axios from "axios";

export const editEventById = (id, input) => async (dispatch) =>{
    console.log('id is:', id)
    console.log('input is:', input)
    const response = await axios.put(`http://localhost:5000/events/update/${id}`, input);
    dispatch({
        type:'EDIT_EVENT',
        payload:response.message
    })

}