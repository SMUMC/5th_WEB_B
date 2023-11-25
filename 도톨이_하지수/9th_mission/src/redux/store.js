import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

// configureStore로 store을 생성(reducer이 필수요소로 있어야 함.)
export default configureStore({
  reducer: {
    user: userSlice,
  },
});
