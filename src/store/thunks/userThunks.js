import { axiosInstance } from "../../helpers/axios"
import { loginUSer } from "../slices/userSlice";

export const registerManager = (body) => {
    return async(dispatch, getState) => {
        const { data } = await axiosInstance
            .post('users/register/first', body);
        const rolls = data.rolls.map(r => r.name);
        dispatch(loginUSer({name: data.name, rolls}));
    }
}

export const login = (body) => {
    return async (dispatch, getState) => {
        const { data } = await (axiosInstance)
            .post('users/Login', body);

        localStorage.setItem('token', data.token)
        console.log(localStorage.getItem('token'));

        const rolls = data.rolls.map(r => r.rolls);
        dispatch(loginUSer({username: data.username, name: data.name, rolls}));
    }
}

export const registerGC = (body) => {
    return async(dispatch, getState) => {
        const { data } = await axiosInstance
            .post('users/register', body);
        const rolls = data.rolls.map(r => r.name);
        dispatch(loginUSer({name: data.name, last_name: data.last_name, rolls, username: data.username}));
    }
}

export const registerTeam = (body) => {
    return async(dispatch, getState) => {
        const { data } = await axiosInstance
            .post('users/register', body);
        const rolls = data.rolls.map(r => r.name);
        dispatch(loginUSer({name: data.name, last_name: data.last_name, rolls, username: data.username}));
    }
}