export const deleteEventByIdReducer =(state = {delEvent:[]}, action ) =>{
   
    switch(action.type){
        case 'DELETE_EVENT':
            return{
                delEvent :action.payload
            }
            default :
            return state
    }
}