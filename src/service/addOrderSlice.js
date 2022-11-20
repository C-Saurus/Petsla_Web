import { createSlice } from "@reduxjs/toolkit";

const addOrderSlice = createSlice({
    name: "add_orders",
    initialState: {
        order:  {
            orderInfor: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getAddOrderStart: (state) => {
            state.user.isFetching = true;
        },
        getAddOrderSuccess: (state, action) => {
            state.order.isFetching = false;
            state.order.orderInfor = action.payload;
            console.log(action.payload)
        },
        getAddOrderFailed: (state) => {
            state.order.isFetching = false;
            state.order.error = true;
        },
    }
})

export const {
    getAddOrderStart,
    getAddOrderSuccess,
    getAddOrderFailed,
} = addOrderSlice.actions

export default addOrderSlice.reducer;