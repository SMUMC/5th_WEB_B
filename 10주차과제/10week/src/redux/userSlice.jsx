// src/redux/userSlice.js

import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      userData: null,
      error: null,
      isLoading: false,
    },
  
    reducers: {
      loginUser: (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      },
      logoutUser: (state) => {
        state.userData = null;
      },
      userRequest: (state) => {
        state.isLoading = true;
        state.error = null;
      },
      userSuccess: (state, action) => {
        state.isLoading = false;
        state.userData = action.payload;
      },
      userFailure: (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      },
    },
  });
  
  export const { loginUser, logoutUser , userRequest, userSuccess, userFailure} = userSlice.actions;
  export const selectUserData = (state) => state.user.userData;
  export const selectUserError = (state) => state.user.error;
  
  export default userSlice.reducer;