import { configureStore } from '@reduxjs/toolkit'
import { FilterSlice } from '../components/Header/filterSlice';
import { cartListReducer } from '../feature/Cart/service/cartSlice';
import {selectProductReducer} from '../feature/Shop/service/productSlice';
import {productListReducer} from '../feature/Shop/service/productListSlice';
import authReducer from '../service/authSlice'
import userReducer from '../service/userSlice'
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