import axios from 'axios'
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess, logoutStart, logoutSuccess, logoutFailed } from './authSlice';
import { getOrderFailed, getOrderStart, getOrderSuccess, updateOrderFailed, updateOrderStart, updateOrderSuccess } from './orderSlice';
import { getAddOrderFailed, getAddOrderStart, getAddOrderSuccess, updateAddOrderFailed, updateAddOrderStart, updateAddOrderSuccess } from './addOrderSlice';
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
        console.log(res.data)
        dispatch(getUserSuccess(res.data));
    } catch(err) {
        dispatch(getUserFailed());
    }
}

export const updateUser = async(accessToken, dispatch, newUser) => {
    dispatch(updateUserStart());
    try {
        const res = await axios.options("http://petsla-api.herokuapp.com/profile/", newUser, {
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
        console.log(res.data)
        dispatch(getOrderSuccess(res.data))
    } catch(err) {
        dispatch(getOrderFailed())
    }
}

export const updateOrder = async(accessToken, dispatch) => {
    dispatch(updateOrderStart())
    try {
        const res = await axios.put("http://petsla-api.herokuapp.com/get-order/", {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        dispatch(updateOrderSuccess(res.data))
    } catch(err) {
        dispatch(updateOrderFailed())
    }
}

export const getAddOrder = async(accessToken, dispatch, order) => {
    dispatch(getAddOrderStart())
    try {
        const res = await axios.post("http://petsla-api.herokuapp.com/add-order/", order, {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        console.log(res.data)
        dispatch(getAddOrderSuccess(res.data))
    } catch(err) {
        dispatch(getAddOrderFailed())
    }
}

export const updateAddOrder = async(accessToken, dispatch) => {
    dispatch(updateAddOrderStart())
    try {
        const res = await axios.post("http://petsla-api.herokuapp.com/add-order/", {
            headers: {
                Authorization: 'Bearer ' + accessToken,
            },
        })
        dispatch(updateAddOrderSuccess(res.data))
    } catch(err) {
        dispatch(updateAddOrderFailed())
    }
}
