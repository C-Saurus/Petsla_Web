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

import { createSlice } from '@reduxjs/toolkit'

const productListReducer = createSlice({
    name: 'productList',
    initialState: {
        productList: []
    },
    reducers: {
        // action creators
        setProducts: (state, action) => {
            state.productList = action.payload;
        }
    }
})
export default productListReducer;
