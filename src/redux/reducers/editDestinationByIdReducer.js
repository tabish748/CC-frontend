export const editDestinationByIdReducer =(state = {editDestination:[]}, action ) =>{
   
    switch(action.type){
        case 'EDIT_DESTINATION':
            return{
                editDestination :action.payload
            }
            default :
            return state
    }
}