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
        }
    }
});

export const { loginUSer } = userSlice.actions;