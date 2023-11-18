// slice는 reducer와 action 생성함수 등의 기능을 제공해주는 객체
import { createSlice } from "@reduxjs/toolkit";
import { cartItems } from "../constants/cartItems";

// createReducer & createAction
//Mock데이터를 가져오기
const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
};

export const cartSlice = createSlice({
  // reducer의 이름
  name: "cart",
  // 데이터 초기값
  initialState,

  reducers: {
    // 음반수량증가함수
    increase: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount += 1;
    },

    // 음반수량감소함수
    decrease: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload
      );
      cartItem.amount -= 1;
    },

    // 음반수량이 1개 이하이면 장바구니에서 삭제
    // splice: 배열의 특정범위를 삭제하거나 새로운 값을 추가 또는 기존값을 대체하는 함수
    removeItem: (state, action) => {
      const itemId = action.payload;
      const itemIndex = state.cartItems.findIndex((item) => item.id === itemId);

      if (state.cartItems[itemIndex].amount <= 1) {
        state.cartItems.splice(itemIndex, 1);
      }
    },

    // 장바구니 전체 초기화
    clearCart: (state) => {
      state.cartItems.splice(cartItems);
    },

    // 수량을 바탕으로 전체금액을 계산
    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;
      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

export const { increase, decrease, removeItem, clearCart, calculateTotals } =
  cartSlice.actions;
//store에서 액션을 내보냄
export default cartSlice.reducer;
