import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        order:  {
            orderInfor: null,
            isFetching: false,
            error: false
        },
    },
    reducers: {
        getOrderStart: (state) => {
            state.order.isFetching = true;
        },
        getOrderSuccess: (state, action) => {
            state.order.isFetching = false;
            state.order.orderInfor = action.payload;
        },
        getOrderFailed: (state) => {
            state.order.isFetching = false;
            state.order.error = true;
        },
    }
})

export const {
    getOrderStart,
    getOrderSuccess,
    getOrderFailed,
} = orderSlice.actions

export default orderSlice.reducer;