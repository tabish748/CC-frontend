import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import {STAGGING_BACKEND , LOCAL_BACKEND} from '../../common/helper';
export const signupAction = createAsyncThunk(
    'registration/signup',
    async (payload) => {
        const url = STAGGING_BACKEND+"user/signup";

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
          };
      
          const response = await fetch(url, requestOptions);
          const responseData = await response.json();
    
          return responseData
    }
)

const initialState = {
    isLoading : true,
    error : "",
    data:{}
}

const userRegSlice = createSlice({
    name : "registration",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(signupAction.pending , (state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(signupAction.fulfilled , (state,action)=>{
            state.isLoading = false;
            state.data = action.payload
        })
        builder.addCase(signupAction.rejected, (state,action)=>{
            state.isLoading = false;
            state.error = "404 SERVER CALL" ;
        })
    }
});

export default userRegSlice.reducer;