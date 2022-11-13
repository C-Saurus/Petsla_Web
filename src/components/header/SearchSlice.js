import { createSlice } from "@reduxjs/toolkit";


export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchText:""
    },
    reducers:{
        setSearchText: (state, action) => {
            console.log("here");
            state.searchText = action.payload;
        }
        
    }
})