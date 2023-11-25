import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import cartItems from "../lib/cartItems";
import Music from "./musicList";
import { reset } from "../redux/user";

export default function CartList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.user.cartItems);
  const total = useSelector((state) => state.user.total);

  const handleReset = () => {
    dispatch(reset()); // Dispatch the reset action to reset cart items and total
  };

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + (item.price - '0') * item.amount, 0);
  };

  return (
    <Container>
      {cartItems.map((item, index) => (
        <Music
          key={index}
          index={index}
          img={item.img}
          title={item.title}
          singer={item.singer}
          price={item.price}
        />
      ))}
      <TotalCost>
        <h6>총 가격</h6>
        <h6>₩{calculateTotal()}</h6> {/* Calculate the total based on cartItems */}
      </TotalCost>
      <Footer>
        <Btn onClick={handleReset}>
          <H3>장바구니 초기화</H3>
        </Btn>
      </Footer>
    </Container>
  );
}
  
  
  const TotalCost = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-top: 2px solid black;
`
  
  
  
const Container = styled.div`
width:100%;
`

const Btn = styled.button`
    width: 150px;
    height: 40px;
    border: 1px solid red;
    color: red;
    border-radius: 5px;
    z-index: 1;
    `
const H3 = styled.h3`
color: red;
padding: 0;
margin: 0;
font-size:12px;
`

const Footer = styled.div`
  height: 100px;
  width: 100%;
  text-align: center;
`