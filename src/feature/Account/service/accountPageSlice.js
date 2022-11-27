import { createSlice } from "@reduxjs/toolkit";


export const accountPageSlice = createSlice({
    name : "sidedashboard",
    initialState:{
        status: false
    },
    reducers:{
        displaySideDashboard: (state, action) => {
            state.status = action.payload;
        }
    }
})
