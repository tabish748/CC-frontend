export const getDestinationByNameReducer = (state= {destinationByName:[]}, action) => {
    switch(action.type){
        case 'DESTINATION_BY_CITY':
            return{
                destinationByName :action.payload
            }
            default:
                return state                        
    }
} 