import { ActionTypes } from '../../redux/constants/actionTypes'

const initialState = {
    productList: [],
}

const productListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, productList: action.payload};
        default:
            return state;
    }
}
export default productListReducer;
