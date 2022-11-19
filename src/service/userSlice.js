import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name: "profile",
    initialState: {
        user: {
            userInfor: null,
            isFetching: false,
            error: false
        },
        update: {
            isFetching: false,
            error: false,
            success: false,
        }
    },
    reducers: {
        getUserStart: (state) => {
            state.user.isFetching = true;
        },
        getUserSuccess: (state, action) => {
            state.user.isFetching = false;
            state.user.userInfor = action.payload;
            localStorage.setItem("profile", JSON.stringify(action.payload))
        },
        getUserFailed: (state) => {
            state.user.isFetching = false;
            state.user.error = true;
        },
        updateUserStart: (state) => {
            state.update.isFetching = true;
        },
        updateUserSuccess: (state, action) => {
            state.update.isFetching = false;
            state.update.success = true;
            state.user.userInfor = action.payload;
            localStorage.setItem("profile", JSON.stringify(action.payload))
        },
        updateUserFailed: (state) => {
            state.update.isFetching = false;
            state.update.success = false;
            state.update.error = true;
        }
    }
})

export const {
    getUserStart,
    getUserSuccess,
    getUserFailed,
    updateUserStart,
    updateUserSuccess,
    updateUserFailed,
} = userSlice.actions;

export default userSlice.reducer;