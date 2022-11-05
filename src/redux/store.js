import  authSlice  from './slices/userAuth';
import userRegSlice from  './slices/userSignup';
import { configureStore } from '@reduxjs/toolkit' ; 
import securitySetting from './slices/securitySetting';
import contactSlice from './slices/contact';
import verificationSlice from './slices/verification';

export const store = configureStore({
    reducer: {
        userAuth:authSlice,
        userReg:userRegSlice,
        changePassword:securitySetting,
        contact:contactSlice,
        verification:verificationSlice,
},
});
