import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { combineReducers } from 'redux'
import { QuestionReducer } from './reducers/questionReducer'
import { editProfileReducer } from './reducers/editProfileReducer'


const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));
const rootReducer = combineReducers({
    questionAir : QuestionReducer,
    editProfile : editProfileReducer
});

export const store = createStore(rootReducer, composedEnhancer )