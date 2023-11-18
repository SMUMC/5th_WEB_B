import React from "react";
import { TotalContainer, Total, Hr, Button } from "./Cart.style";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useEffect } from "react";
import { calculateTotals } from "../redux/cartSlice";

export default function Account() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const total = useSelector((state) => state.cart.total);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  return (
    <TotalContainer>
      <Hr />
      <Total>총 합계 | ₩{total}</Total>
      <Button
        onClick={() => {
          dispatch(clearCart(cartItems));
        }}
      >
        장바구니 초기화
      </Button>
    </TotalContainer>
  );
}
