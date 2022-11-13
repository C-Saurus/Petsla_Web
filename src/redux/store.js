// import { legacy_createStore as createStore } from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhancers)

// export default store;

import { configureStore } from '@reduxjs/toolkit'
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

        // auth
        auth: authReducer,
        user: userReducer
    }
})

export default store;