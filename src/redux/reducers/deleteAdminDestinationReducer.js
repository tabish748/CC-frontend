export const deleteAdminDestinationReducer =(state = {deletedDestination:[]}, action ) =>{
   
    switch(action.type){
        case 'ALL_DESTINATIONS':
            return{
                deletedDestination :action.payload
            }
            default :
            return state
    }
}