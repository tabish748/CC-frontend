import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import { getTransportPackageByIdReducer } from './reducers/getTransportPackageByIdReducer'
import {getAllDestinationsReducer} from './reducers/getAllDestinationsReducer'
import { postDestinationReducer } from './reducers/postDestinationReducer'
import {deleteAdminDestinationReducer} from './reducers/deleteAdminDestinationReducer'
import { getDestinationByNameReducer } from './reducers/getDestinationByNameReducer'
import { getDestinationByIdReducer } from './reducers/getDestinationByIdReducer'
import { editDestinationByIdReducer } from './reducers/editDestinationByIdReducer'
import { getAllHotelsReducer } from './reducers/getAllHotelsReducer'
import { getAllTransportersReducer } from './reducers/getAllTransportersReducer'
import { getAllUsersReducer } from './reducers/getAllUsersReducer'
import {getHotelPackagesByIdReducer} from './reducers/getHotelPackagesByIdReducer'
import { getUserByIdReducer } from './reducers/getUserByIdReducer'
import { getAllEventsReducer } from './reducers/getAllEventsReducer'
import { deleteEventByIdReducer } from './reducers/deleteEventByIdReducer'
import { getEventByIdReducer } from './reducers/getEventByIdReducer'
import { editEventByIdReducer } from './reducers/editEventByIdReducer'
import {deleteTransportPackageReducer} from './reducers/deleteTransportPackageReducer'

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware))
const rootReducer = combineReducers({
    transportPackages:getTransportPackageByIdReducer,
    users: getAllUsersReducer,
    destinations: getAllDestinationsReducer,
    postDestination:postDestinationReducer,
    deletedDestination:deleteAdminDestinationReducer,
    destinationByName:getDestinationByNameReducer,
    destinationById:getDestinationByIdReducer,
    editDestination:editDestinationByIdReducer,
    hotels :getAllHotelsReducer,
    transporters :getAllTransportersReducer,
    hotelPackages:getHotelPackagesByIdReducer,
    singleUser:getUserByIdReducer,
    events:getAllEventsReducer,
    delEvent:deleteEventByIdReducer,
    singleEvent:getEventByIdReducer,
    editEvent:editEventByIdReducer,
    delTransportPackage:deleteTransportPackageReducer
})

export const store = createStore(rootReducer, composedEnhancer )