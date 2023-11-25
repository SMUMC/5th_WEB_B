import { createSlice } from '@reduxjs/toolkit';
import cartItems from '../lib/cartItems';
const initialState = {
  cartItems: cartItems,
  total: 0, // cartItems는 외부 데이터로 초기화
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    incrementAmount: (state, action) => {
      const { index } = action.payload;
      state.cartItems[index].amount += 1;
      state.total+=(state.cartItems[index].price-'0');
    },
    decrementAmount: (state, action) => {
        const { index } = action.payload;
        state.cartItems[index].amount -= 1;
        state.total-=(state.cartItems[index].price-'0');
      },
      reset: (state) => {
        state.cartItems.forEach((item) => {
          item.amount = 0;
        });
        state.total = 0; // state.total을 0으로 리셋
      },
  },
});

export const {  incrementAmount,decrementAmount , reset } = userSlice.actions;
export default userSlice.reducer;