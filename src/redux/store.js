import  authSlice  from './slices/userAuth';
import userRegSlice from  './slices/userSignup';
import { configureStore } from '@reduxjs/toolkit' ; 
import securitySetting from './slices/securitySetting';

export const store = configureStore({
    reducer: {
        userAuth:authSlice,
        userReg:userRegSlice,
        changePassword:securitySetting,
},
});
