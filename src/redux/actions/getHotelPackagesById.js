import axios from "axios";

export const getHotelPackagesById = (id) => async (dispatch)=>{
    console.log('hote id is :::', id)
    const response = await axios.get(`http://localhost:5000/hotelPackage/${id}`)
    dispatch({
        type:'GET_HOTEL_PACKAGES',
        payload:response.data
    })

}