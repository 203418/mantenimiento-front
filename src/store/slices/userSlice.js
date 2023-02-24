import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    process: {}
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        loginUSer: (state, action) => {
            state.user = action.payload;
            state.user.isLogged = true;
        },
        closeSesion: (state, action) => {
            state.user = {}
            state.isLogged = false;
        },
        deleteUserId: (state, action) => {
            state.user = {}
        }
    }
});

export const { loginUSer, closeSesion } = userSlice.actions;