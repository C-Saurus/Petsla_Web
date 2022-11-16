import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

export const selectProductReducer = createSlice({
    name: 'product',
    initialState: {
        status: 'idle',
        product: {}
    },
    reducers: {
        // action creators
        selectProduct: (state, action) => {
            console.log('state: ', state)
            state.product = action.payload;
        },
        removeProduct: (state) => {
            state.product = {};
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProductDetail.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchProductDetail.fulfilled, (state, action) => {
            state.product = action.payload;
            state.status = 'idle';
        })
    }
})

export const fetchProductDetail = createAsyncThunk('product/fetchProductDetail', async (productId) => {
    const response = await axios
        .get("http://petsla-api.herokuapp.com/products/")
        .catch((err) => {
            console.log("Err: ", err);
        });
    const selected = response.data.filter(ele => ele.id.toString() === productId)
    return selected[0];
})



