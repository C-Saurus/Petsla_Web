// const selectProductReducer = (state = {}, { type, payload }) => {
//     // console.log(type);
//     switch (type) {
//         case 'product/selectProduct':
//             return { ...state, ...payload };
//         case 'product/removeProduct':
//             return {};
//         default:
//             return state;
//     }
// };

import { createSlice } from '@reduxjs/toolkit'

const selectProductReducer = createSlice({
    name: 'product',
    initialState: {
        productList: []
    },
    reducers: {
        // action creators
        selectProduct: (state, action) => {
            state.productList = action.payload;
        },
        removeProduct: (state) => {
            state = {};
        }
    }
})

export default selectProductReducer;
