export const getAllHotelsReducer = (state= {hotels:[]}, action) => {
    switch(action.type){
        case 'GET_HOTELS':
            return{
                hotels :action.payload
            }
            default:
                return state                        
    }
} 