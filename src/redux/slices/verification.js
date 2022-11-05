import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const verification = createAsyncThunk(
    'user-verification/verification',
    async (payload, thunkAPI) => {
        const url = "http://45.58.35.11:8082/user/verify-user";

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

const verificationSlice = createSlice({
    name: "user-verification",
    initialState,
    // reducers:{
    //     login
    // },
    extraReducers : (builder) => {
        builder.addCase(verification.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(verification.fulfilled , (state,action) => {
             state.isLoading = false;
             state.data = action.payload;
             if (action.payload.error === false){
                state.isAuthenticated = true;
             }
              
        })
        builder.addCase(verification.rejected,(state,action)=>{
            state.isLoading = "error"
        })
    }
});
export default verificationSlice.reducer;