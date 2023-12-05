import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./userSlice";
import rootReducer from "./rootreducer";
import postSlice from "./postSlice";
export default configureStore({
  reducer: {
    user: userSlice,
    reducer: rootReducer,
    posts: postSlice// Use postSlice directly
  },
});