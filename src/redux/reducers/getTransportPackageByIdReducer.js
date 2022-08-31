export const getTransportPackageByIdReducer = (state= {transportPackages:[]}, action) => {
    console.log("actopm ",action.payload)
    switch(action.type){
        case 'PACKAGES':
            return{
                transportPackages :action.payload
            }
            default:
                return state                        
    }
} 