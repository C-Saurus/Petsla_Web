// import { legacy_createStore as createStore } from 'redux'
// import rootReducer from './reducer'
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools();
// const store = createStore(rootReducer, composeEnhancers)

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import {selectProductReducer} from '../components/Product/productSlice';
import {productListReducer} from '../components/ProductList/productListSlice';

const store = configureStore({
    reducer: {
        allProducts: productListReducer.reducer,
        selectProduct: selectProductReducer.reducer 
    }
})

export default store;