import { createSlice } from "@reduxjs/toolkit";

const addOrderSlice = createSlice({
    name: "add_orders",
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
        getAddOrderStart: (state) => {
            state.order.isFetching = true;
        },
        getAddOrderSuccess: (state, action) => {
            state.order.isFetching = false;
            state.order.orderInfor = action.payload;
            localStorage.setItem("add_order", JSON.stringify(action.payload))
        },
        getAddOrderFailed: (state) => {
            state.order.isFetching = false;
            state.order.error = true;
        },
        updateAddOrderStart: (state) => {
            state.update.isFetching = true;
        },
        updateAddOrderSuccess: (state, action) => {
            state.update.isFetching = false;
            state.update.success = true;
            state.order.orderInfor = action.payload;
            localStorage.setItem("add_order", JSON.stringify(action.payload))
        },
        updateAddOrderFailed: (state) => {
            state.update.isFetching = false;
            state.update.success = false;
            state.update.error = true;
        }
    }
})

export const {
    getAddOrderStart,
    getAddOrderSuccess,
    getAddOrderFailed,
    updateAddOrderStart,
    updateAddOrderSuccess,
    updateAddOrderFailed,
} = addOrderSlice.actions

export default addOrderSlice.reducer;