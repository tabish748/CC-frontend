import axios from 'axios'
export const getAllHotels = () =>async (dispatch) =>{
    const response = await axios.get("http://localhost:5000/hotels")
    dispatch({
        type:'GET_HOTELS',
        payload:response.data
    })
}