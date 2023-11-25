import { configureStore, isAsyncThunkAction } from "@reduxjs/toolkit";
import { userSlice } from "./user";
import rootReducer from "./rootReducer";
export default configureStore({
  reducer: {
    user: userSlice,
    reducer: rootReducer
  },
});