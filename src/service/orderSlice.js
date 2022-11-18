import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: "orders",
    initialState: {
        order:  {
            orderInfor: null,
            isFetching: false,
            error: false
        },
        update: {
            isFetching: false,
            error: false,
            success: false
        }
    },
    reducers: {
        getOrderStart: (state) => {
            state.order.isFetching = true;
        },
        getOrderSuccess: (state, action) => {
            state.order.isFetching = false;
            state.order.orderInfor = action.payload;
            localStorage.setItem("order", JSON.stringify(action.payload))
        },
        getOrderFailed: (state) => {
            state.order.isFetching = false;
            state.order.error = true;
        },
        updateOrderStart: (state) => {
            state.update.isFetching = true;
        },
        updateOrderSuccess: (state, action) => {
            state.update.isFetching = false;
            state.update.success = true;
            state.order.orderInfor = action.payload;
            localStorage.setItem("order", JSON.stringify(action.payload))
        },
        updateOrderFailed: (state) => {
            state.update.isFetching = false;
            state.update.success = false;
            state.update.error = true;
        }
    }
})

export const {
    getOrderStart,
    getOrderSuccess,
    getOrderFailed,
    updateOrderStart,
    updateOrderSuccess,
    updateOrderFailed,
} = orderSlice.actions

export default orderSlice.reducer;