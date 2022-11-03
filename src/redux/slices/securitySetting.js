import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";


export const backendCall = createAsyncThunk(
    'security/change_password',
    async (payload) =>{
        const url = "http://127.0.0.1:8082/user/edit-profile";

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json',
                        'Authorization': 'token '+ localStorage.getItem("token") },
            body: JSON.stringify(payload)
        };

        const response = await fetch(url, requestOptions);
        const responseData = await response.json();
        return responseData
    }
)
const initialState = {
    isLoading: true,
    data : {}
}

const securitySettings = createSlice ({
    name : "security",
    initialState,
    extraReducers: (builder) =>{
        builder.addCase(backendCall.pending,(state,action)=>{
            state.isLoading = true
            state.data = {}
        })
        builder.addCase(backendCall.fulfilled,(state,action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        builder.addCase(backendCall,(state,action)=>{
            state.isLoading = false
            state.data = {}
            state.error = true
        })
    }
})

export default securitySettings.reducer;