export const deleteTransportPackageReducer =(state = {delTransportPackage:[]}, action ) =>{
   
    switch(action.type){
        case 'DELETE_TRANSPORT_PACKAGE':
            return{
                delTransportPackage :action.payload
            }
            default :
            return state
    }
}