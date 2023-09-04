import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: 0, name: 'Amarnath'},
    {id: 1, name: 'Sushant'},
    {id: 2, name: 'Tinkle'},
    {id: 3, name: 'Shahbaz'},
    {id: 4, name: 'Roushan'}
];

const userSlide = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;
export default userSlide.reducer;
