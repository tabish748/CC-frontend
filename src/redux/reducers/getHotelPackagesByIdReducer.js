export const getHotelPackagesByIdReducer = (state= {hotelPackages:[]}, action) => {
    console.log("actopm ",action.payload)
    switch(action.type){
        case 'GET_HOTEL_PACKAGES':
            return{
                hotelPackages :action.payload
            }
            default:
                return state                        
    }
} 