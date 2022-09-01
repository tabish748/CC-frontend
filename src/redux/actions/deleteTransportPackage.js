import axios from "axios";

export const deleteTransportPackage = (id) => async (dispatch) =>{
    const response = await axios.delete(`http://localhost:5000/transport/package/delete/${id}`);
    dispatch({
        type:'DELETE_TRANSPORT_PACKAGE',
        payload:response.message
    })
}