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

export const selectProductReducer = createSlice({
    name: 'product',
    initialState: {},
    reducers: {
        // action creators
        selectProduct: (state, action) => {
            // console.log('state: ', state)
            return action.payload;
        },
        removeProduct: (state) => {
            return {};
        }
    }
})

