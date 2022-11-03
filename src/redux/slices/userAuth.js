import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const login = createAsyncThunk(
    'auth/login',
    async (payload, thunkAPI) => {
        const url = "http://127.0.0.1:8082/user/login";

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        };

        const response = await fetch(url, requestOptions);
        const responseData = await response.json();
        if (responseData.error === false && responseData.data.token) {
            localStorage.setItem("token", responseData.data.token);
            localStorage.setItem("user",responseData.data.name)
        }
        return responseData
    }
)
const initialState = {
    isLoading:true,
    data:{},
    isAuthenticated :false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    // reducers:{
    //     login
    // },
    extraReducers : (builder) => {
        builder.addCase(login.pending,(state,action)=>{
            state.isLoading = true;
        })
        builder.addCase(login.fulfilled , (state,action) => {
             state.isLoading = false;
             state.data = action.payload;
             if (action.payload.error === false){
                state.isAuthenticated = true;
             }
              
        })
        builder.addCase(login.rejected,(state,action)=>{
            state.isLoading = "error"
        })
    }
});
export default authSlice.reducer;