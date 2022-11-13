// const initialState = {
//     productList: [],
// }

// const productListReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case 'productList/setProducts':
//             return {...state, productList: action.payload};
//         default:
//             return state;
//     }
// }
// export default productListReducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
export const productListReducer = createSlice({
    name: 'productList',
    initialState: {
        status: 'idle',
        productList: [],
    },
    reducers: {
        // action creators
        setProducts: (state, action) => {
            state.productList = action.payload;
        }
        
    },
    extraReducers: builder => {
        builder.addCase(fetchProductList.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchProductList.fulfilled, (state, action) => {
            state.productList = action.payload;
            state.status = 'idle';
        })
    }
})

// thunk function creator
export const fetchProductList = createAsyncThunk('productList/fetchProductList', async () => {
    const response = await axios
        .get("http://petsla-api.herokuapp.com/products/")
        .catch((err) => {
            console.log("Err: ", err);
        });
    return response.data;
})
