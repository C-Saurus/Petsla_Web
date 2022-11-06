import { combineReducers } from 'redux'
import { selectProductReducer } from '../components/Product/productSlice';
import productsReducer from '../components/ProductList/productsSlice';

const rootReducer = combineReducers({
    allProducts: productsReducer,
    selectProduct: selectProductReducer
})
export default rootReducer;