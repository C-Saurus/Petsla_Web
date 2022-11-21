import axios from 'axios'
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess, logoutStart, logoutSuccess, logoutFailed } from './authSlice';
import { getOrderFailed, getOrderStart, getOrderSuccess } from './orderSlice';
import { getAddOrderFailed, getAddOrderStart, getAddOrderSuccess } from './addOrderSlice';
import { getUserFailed, getUserStart, getUserSuccess, updateUserFailed, updateUserStart, updateUserSuccess } from './userSlice';
export const loginUser = async (user, dispatch) => {
    dispatch(loginStart());
    try{
        const res = await axios.post("http://petsla-api.herokuapp.com/login/", user);
        dispatch(loginSuccess(res.data));
        return true;
    }catch(err) {
        dispatch(loginFailed());
        return false;
    }
};

export const registerUser = async (user, dispatch) => {
    dispatch(registerStart());
    try {
        await axios.post("http://petsla-api.herokuapp.com/register/", user);
        dispatch(registerSuccess());
        return true;
    } catch(err) {
        dispatch(registerFailed());
        return false;
    }
}

export const getUsers = async (accessToken, dispatch) => {
    dispatch(getUserStart());
    try {
        const res = await axios.get("http://petsla-api.herokuapp.com/profile/", {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        });
        dispatch(getUserSuccess(res.data));
    } catch(err) {
        dispatch(getUserFailed());
    }
}

export const updateUser = async(accessToken, dispatch, newUser) => {
    dispatch(updateUserStart());
    try {
        const res = await axios.put("http://petsla-api.herokuapp.com/profile/", newUser, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        dispatch(updateUserSuccess(res.data));
    } catch(err) {
        dispatch(updateUserFailed());
    }
}

export const logOut = async(dispatch) => {
    dispatch(logoutStart())
    try {
        dispatch(logoutSuccess());
    } catch(err) {
        dispatch(logoutFailed());
    }
}

export const getOrder = async(accessToken, dispatch) => {
    dispatch(getOrderStart())
    try {
        const res = await axios.get("http://petsla-api.herokuapp.com/get-order/", {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        dispatch(getOrderSuccess(res.data))
        return res.data
        
    } catch(err) {
        dispatch(getOrderFailed())
        return false
    }
}


export const getAddOrder = async(accessToken, dispatch, order) => {
    dispatch(getAddOrderStart())
    try {
        const res = await axios.post("http://petsla-api.herokuapp.com/add-order/", order, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        });
        dispatch(getAddOrderSuccess(res.data))
        return true
    } catch(err) {
        dispatch(getAddOrderFailed())
        return false
    }
}

