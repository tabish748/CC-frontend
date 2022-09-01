export const getAllUsersReducer = (state= {users:[]}, action) => {
    switch(action.type){
        case 'GET_USERS':
            return{
                users :action.payload
            }
            default:
                return state                        
    }
} 