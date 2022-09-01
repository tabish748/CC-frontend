export const getAllTransportersReducer = (state= {transporters:[]}, action) => {
    switch(action.type){
        case 'GET_TRANSPORTE_PACKAGES':
            return{
                transporters :action.payload
            }
            default:
                return state                        
    }
} 