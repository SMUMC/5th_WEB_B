import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    userId: "",
    accesstoken: "",
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    loginUser: (state, action) => {
      state.userInfo.userId = action.payload.userId;
      state.error = "";
    },
  },
});

export const { loginUser } = userSlice.actions;
export default userSlice.reducer;