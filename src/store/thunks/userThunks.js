import { axiosCreate } from "../../helpers/axios"
import { loginUSer } from "../slices/userSlice";

export const registerManager = (body) => {
    return async(dispatch, getState) => {
        const { data } = await axiosCreate()
            .post('users/register/first', body);
        const rolls = data.rolls.map(r => r.name);
        dispatch(loginUSer({
            id: data.id,
            name: data.name,
            last_name: data.last_name,
            rolls,
            token: data.token,

        }));
        localStorage.setItem('token', data.token)
    }
}

export const loginByToken = (body) => {
    return async(dispatch, getState) => {
        const { data } = await axiosCreate()
            .post('users/login/token', body);
        if (data.user !== null) {
            const rolls = data.user.rolls.map(r => r.name);
            dispatch(loginUSer({
                id: data.user.id,
                name: data.user.name,
                last_name: data.user.last_name,
                rolls,
                token: data.token
            }));
            localStorage.setItem('token', data.user.token);
        }
    }
}

export const login = (body) => {
    return async(dispatch, getState) => {
        await axiosCreate()
            .post('users/login', body)
            .then(async({data}) => {
                const rolls = data.rolls.map(r => r.name);
                const token = data.token;
                if (data !== null) {
                    dispatch(loginUSer({
                        id: data.id,
                        name: data.name,
                        last_name: data.last_name,
                        rolls,
                        token
                    }));
                    await localStorage.setItem('token', token);
                }
            });
    }
}
export const deleteUser = (body) => {
    return async(dispatch, getState) => {
        await axiosCreate()
            .delete(`users/delete`, { data: body })
            .catch(error => console.log(error));
    }
}

export const updateUSer = (body) => {
    return async(dispatch, getState) => {
        await axiosCreate()
            .put(`users/update`, { data: body })
            .then(async({data}) => {
                const rolls = data.rolls.map(r => r.name);
                const token = data.token;
                if (data) {
                    dispatch(loginUSer({
                        id: data.id,
                        name: data.name,
                        last_name: data.last_name,
                        rolls,
                        token
                    }));
                    await localStorage.setItem('token', token);
                }
            })
            .catch(error => console.log(error));
    }
}