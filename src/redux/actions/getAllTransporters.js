import axios from 'axios'
export const getAllTransporters = () =>async (dispatch) =>{
    const response = await axios.get("http://localhost:5000/transportPackages")
    dispatch({
        type:'GET_TRANSPORTE_PACKAGES',
        payload:response.data
    })
}