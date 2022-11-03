import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const BackendCall = createAsyncThunk(
    'contact/call',
    async (payload, thunkAPI) => {
        const url = "http://127.0.0.1:8082/user/questionair";

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

const questionAir = createSlice({
    name: "questionAir",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(BackendCall.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(BackendCall.fulfilled , (state,action) => {
             state.isLoading = false;
             state.data = action.payload;
        })
        builder.addCase(BackendCall.rejected,(state,action)=>{
            state.isLoading = "error"
        })
    }
});
export default questionAir.reducer;