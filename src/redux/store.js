import  authSlice  from './slices/userAuth';
import userRegSlice from  './slices/userSignup';
import { configureStore } from '@reduxjs/toolkit' ; 
import securitySetting from './slices/securitySetting';
import contactSlice from './slices/contact';

export const store = configureStore({
    reducer: {
        userAuth:authSlice,
        userReg:userRegSlice,
        changePassword:securitySetting,
        contact:contactSlice
},
});
