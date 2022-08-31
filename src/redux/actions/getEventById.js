import axios from "axios";

export const getEventById = (id) => async (dispatch)=>{
    const response = await axios.get(`http://localhost:5000/event/${id}`)
    dispatch({
        type:'GET_EVENT_BYID',
        payload:response.data
    })

}