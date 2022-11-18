import axios from 'axios'
import { loginFailed, loginStart, loginSuccess, registerFailed, registerStart, registerSuccess, logoutStart, logoutSuccess, logoutFailed } from './authSlice';
import { getUserFailed, getUserStart, getUserSuccess } from './userSlice';
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

export const logOut = async(dispatch, navigate, accessToken) => {
    dispatch(logoutStart())
    try {
        dispatch(logoutSuccess());
    } catch(err) {
        dispatch(logoutFailed());
    }
}