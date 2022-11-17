import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {
            user: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getUserStart: (state) => {
            state.user.isFetching = true;
        },
        getUserSuccess: (state, action) => {
            state.user.isFetching = false;
            state.user.allUsers = action.payload;
        },
        getUserFailed: (state) => {
            state.user.isFetching = false;
            state.user.error = true;
        }
    }
})

export const {
    getUserStart,
    getUserSuccess,
    getUserFailed
} = userSlice.actions;

export default userSlice.reducer;