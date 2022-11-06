import {ActionTypes} from "../constants/actionTypes";

export const setProducts = (products) => {
    return {
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const selectProduct = (product) => {
    return {
        type: ActionTypes.SELECT_PRODUCT,
        payload: product,
    };
};
export const removeProduct = () => {
    return {
        type: ActionTypes.REMOVE_PRODUCT,
    };
};
