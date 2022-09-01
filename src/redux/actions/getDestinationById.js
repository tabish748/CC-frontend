import axios from 'axios'
export const getDestinationById = (id) => async (dispatch) =>{
    console.log('get destination id is: ',id)
    const response = await axios.get(`http://localhost:5000/destination/${id}`)
    dispatch({
        type:'DESTINATION_BY_ID',
        payload: response.data
    })
    console.log('destinationby name in action is :', response.data)
}