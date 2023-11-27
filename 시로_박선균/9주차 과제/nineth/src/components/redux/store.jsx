import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice.jsx";

export default configureStore({
  reducer: {
    user: loginSlice,
  },
});