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
import { useDispatch } from 'react-redux';
var initialList = []
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
        },

        sortBy: (state, action) => {
            if (action.payload == "0") {
                state.productList = initialList;
            }
            if (action.payload == "1") {
                state.productList = state.productList.sort((a, b) => a.product_name.localeCompare(b.product_name))
            }
            if (action.payload == "2") {
                state.productList = state.productList.sort((a, b) => b.product_name.localeCompare(a.product_name))
            }
            if (action.payload == "3") {
                state.productList = state.productList.sort((a, b) => a.price - b.price)
            }
            if (action.payload == "4") {
                state.productList = state.productList.sort((a, b) => b.price - a.price)
            }
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchProductList.pending, (state, action) => {
            state.status = 'loading';
        }).addCase(fetchProductList.fulfilled, (state, action) => {
            state.productList = action.payload;
            state.status = 'idle';
            initialList = action.payload;
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
