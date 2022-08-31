import axios from 'axios'
export const getAllUsers = () =>async (dispatch) =>{
    const response = await axios.get("http://localhost:5000/users")
    dispatch({
        type:'GET_USERS',
        payload:response.data
    })
}