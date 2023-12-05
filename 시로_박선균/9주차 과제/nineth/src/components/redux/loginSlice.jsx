import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {
    userName: "",
    token: "",
  },
};

export const loginSlice = createSlice({
  name: "user",
  initialState,

  reducers: {
    login: (state, action) => {
      console.log(action.payload); // payload의 내용을 출력
      state.userInfo.token = action.payload.token;
      state.userInfo.userName = action.payload.useName;
      console.log("asd", state.userInfo);
    },
    logout : (state,action)=>{
      state.userInfo.token = ""
      state.userInfo.userName = ""
    }
  },
});

export const { login,logout } = loginSlice.actions;
export default loginSlice.reducer;