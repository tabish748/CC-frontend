export const getEventByIdReducer = (state= {singleEvent:[]}, action) => {
    console.log("actopm ",action.payload)
    switch(action.type){
        case 'GET_EVENT_BYID':
            return{
                singleEvent :action.payload
            }
            default:
                return state                        
    }
} 