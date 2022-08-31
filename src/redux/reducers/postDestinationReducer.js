export const postDestinationReducer = (state= {postDestination:''}, action) => {
    switch(action.type){
        case 'POST_DESTINATION':
            return{
                postDestination :action.payload
            }
            default:
                return state                        
    }
} 