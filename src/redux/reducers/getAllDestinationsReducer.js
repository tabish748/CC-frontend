export const getAllDestinationsReducer =(state = {destinations:[]}, action ) =>{
   
    switch(action.type){
        case 'ALL_DESTINATIONS':
            return{
                destinations :action.payload
            }
            default :
            return state
    }
}