import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    userId: "",
    token: "",
  },
};

export const loginSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      state.userInfo.userId = action.payload.userId;
      state.userInfo.token = action.payload.token;
      console.log("asd",state.userInfo)
    },
  },
});

export const { login } = loginSlice.actions;
export default loginSlice.reducer;