import axios from 'axios'
export const getDestinationByName = (city) => async (dispatch) =>{
    console.log('city in action is: ',city)
    const response = await axios.get(`http://localhost:5000/destinationByCityName/${city}`)
    dispatch({
        type:'DESTINATION_BY_CITY',
        payload: response.data
    })
    console.log('destinationby name in action is :', response.data)
}