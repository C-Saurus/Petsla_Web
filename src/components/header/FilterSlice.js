import { createSlice } from "@reduxjs/toolkit";


export const FilterSlice = createSlice({
    name: 'filter',
    initialState: {
        searchText: "",
        sortValue: "0"
    },
    reducers: {
        setSearchText: (state, action) => {
            state.searchText = action.payload;
        },
        setSortValue: (state, action) => {
            state.sortValue = action.payload
        }
    }
})