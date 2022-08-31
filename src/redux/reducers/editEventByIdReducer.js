export const editEventByIdReducer =(state = {editEvent:[]}, action ) =>{
   
    switch(action.type){
        case 'EDIT_EVENT':
            return{
                editEvent :action.payload
            }
            default :
            return state
    }
}