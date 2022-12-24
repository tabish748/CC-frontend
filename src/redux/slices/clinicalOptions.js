import { createSlice } from "@reduxjs/toolkit";


const clinicalOptionSlice = createSlice({
    name : "options",
    initialState : {
        options : []
    },
    reducers : {
        storeOptions (state,action){
            state.options = action.payload;
        }
    }
})

export const { storeOptions } = clinicalOptionSlice.actions;
export default clinicalOptionSlice.reducer;