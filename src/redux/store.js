import { configureStore } from '@reduxjs/toolkit'
import { FilterSlice } from '../components/header/FilterSlice';
import { cartListReducer } from '../components/pages/Cart/cartSlice';
import {selectProductReducer} from '../components/Product/productSlice';
import {productListReducer} from '../components/ProductList/productListSlice';
import authReducer from './actions/authSlice'
import userReducer from './actions/userSlice'
const store = configureStore({
    reducer: {
        allProducts: productListReducer.reducer,
        selectProduct: selectProductReducer.reducer,
        cartListProducts: cartListReducer.reducer,
        filter: FilterSlice.reducer,
        // auth
        auth: authReducer,
        user: userReducer
    }
})

export default store;