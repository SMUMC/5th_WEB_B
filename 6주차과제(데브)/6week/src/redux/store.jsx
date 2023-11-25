import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user'; // 사용자 슬라이스 파일 경로로 변경

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;