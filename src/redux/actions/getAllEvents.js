import axios from 'axios'
export const getAllEvents = () =>async (dispatch) =>{
    const response = await axios.get("http://localhost:5000/events/recent")
    dispatch({
        type:'GET_EVENTS',
        payload:response.data
    })
}