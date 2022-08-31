import axios from "axios";

export const editDestinationById = (id , input) => async (dispatch) =>{
    console.log('id in edit is:', id)
    console.log('id in edit is:', input)
    const response = await axios.put(`http://localhost:5000/destination/update/${id}`,input);
    dispatch({
        type:'EDIT_DESTINATION',
        payload:response.data
    })
}