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

export const loginByToken = (body) => {
    return async(dispatch, getState) => {
        const { data } = await axiosInstance
            .post('users/login/token', body);
        if (data.user !== null) {
            const rolls = data.user.rolls.map(r => r.name);
            dispatch(loginUSer({
                id: data.user.id,
                name: data.user.name,
                last_name: data.user.last_name,
                rolls,
                token: data.user.token
            }));
        }
    }
}

export const login = (body) => {
    return async(dispatch, getState) => {
        const { data } = await axiosInstance
            .post('users/login', body);
        const rolls = data.rolls.map(r => r.name);
        dispatch(loginUSer({
            id: data.id,
            name: data.name,
            last_name: data.last_name,
            rolls,
            token: data.token
        }));
        localStorage.setItem('token', data.token);
    }
}