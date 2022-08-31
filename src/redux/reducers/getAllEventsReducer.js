export const getAllEventsReducer = (state= {events:[]}, action) => {
    switch(action.type){
        case 'GET_EVENTS':
            return{
                events :action.payload
            }
            default:
                return state                        
    }
} 