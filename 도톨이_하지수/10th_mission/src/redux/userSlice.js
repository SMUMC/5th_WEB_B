import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    isLogin: false,
    contents: {
      contentCount: 0,
      content: [],
    },
    following: {
      id: "",
      isFollowing: false,
      followingCount: 0,
    },
    follower: 0,
  },
  reducers: {
    loginAction: (state) => {
      state.isLogin = true;
    },
    logoutAction: (state) => {
      state.isLogin = false;
    },
    contentAction: (state, action) => {
      const postId = state.contents.content.length + 1;

      state.contents.contentCount = action.payload.count + 1;
      state.contents.content.push({
        id: postId,
        content: action.payload.content,
      });
    },
    deleteAction: (state, action) => {
      state.contents.content = state.contents.content.filter(
        (item) => item.id !== action.payload
      );
      state.contents.count = state.contents.content.length;
    },
    followingAction: (state, action) => {
      if (action.payload.isFollowing === false) {
        if (action.payload.count !== 0) {
          state.following.followingCount = action.payload.count - 1;
        } else {
          state.following.followingCount = action.payload.count;
        }
      } else {
        state.following.followingCount = action.payload.count + 1;
      }
    },
  },
});

export const {
  loginAction,
  logoutAction,
  contentAction,
  deleteAction,
  followingAction,
} = userSlice.actions;
export default userSlice.reducer;
