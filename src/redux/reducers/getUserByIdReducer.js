export const getUserByIdReducer = (state= {singleUser:[]}, action) => {
    switch(action.type){
        case 'SINGLE_USER':
            return{
                singleUser :action.payload
            }
            default:
                return state                        
    }
} 