// 중앙저장소
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

// configureStore로 store을 생성(reducer이 필수요소로 있어야 함.)
export default configureStore({
  reducer: {
    cart: cartSlice,
  },
});
