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
            state.name = action.payload.name;
            state.last_name = action.payload.last_name;
            state.username = action.payload.username;
        }
    }
});

export const { loginUSer } = userSlice.actions;