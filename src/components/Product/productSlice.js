import { ActionTypes } from "../../redux/constants/actionTypes"

export const selectProductReducer = (state = {}, { type, payload }) => {
    console.log(type);
    switch (type) {
        case ActionTypes.SELECT_PRODUCT:
            return { ...state, ...payload };
        case ActionTypes.REMOVE_PRODUCT:
            return {};
        default:
            return state;
    }
};