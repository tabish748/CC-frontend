import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {STAGGING_BACKEND , LOCAL_BACKEND} from '../../common/helper';
export const call = createAsyncThunk(
    'contact/call',
    async (payload) => {
        const url = STAGGING_BACKEND+"user/contact";

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
    isLoading:true,
    data:{},
    isAuthenticated :false
}

const contactSlice = createSlice({
    name: "contact",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(call.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(call.fulfilled , (state,action) => {
             state.isLoading = false;
             state.data = action.payload;
        })
        builder.addCase(call.rejected,(state,action)=>{
            state.isLoading = "error"
        })
    }
});
export default contactSlice.reducer;