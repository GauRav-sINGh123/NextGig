import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
    name: "auth",
    initialState:null,
    reducers: {
        setUser:(state, action) => {
            state.user = action.payload;
        }
    },
});


export const { setIsAuthenticated } = authSlice.actions;

export default authSlice.reducer;
