export const getDestinationByIdReducer = (state= {destinationById:[]}, action) => {
    switch(action.type){
        case 'DESTINATION_BY_ID':
            return{
                destinationById :action.payload
            }
            default:
                return state                        
    }
} 