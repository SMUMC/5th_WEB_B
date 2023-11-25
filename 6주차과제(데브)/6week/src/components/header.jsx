import React from "react";
import styled from 'styled-components'

import { CartIcon } from "../lib/icon";
import { useSelector } from 'react-redux';
export default function Header() {
    const cartItems = useSelector((state) => state.user.cartItems);
  
    // Calculate the total amount by summing the "amount" property of each item
    const totalAmount = cartItems.reduce((total, item) => total + item.amount, 0);
  
    return (
      <Container>
        <h2>SMU PlayList</h2>
        <IconBox>
          <CartIcon /> 
          {totalAmount > 0 && ( 
            <AmountBadge>{totalAmount}</AmountBadge>
          )}
        </IconBox>
      </Container>
    );
  }

const Container = styled.div`
    width: 100%;
    height: 50px;
    background-color: #9c80e9;
    display: flex;
    justify-content: space-around;
    color: white;
    font-size: 16px;
    align-items: center;
    position: sticky;
    top: 0;
    margin-bottom: 30px;
`
const IconBox = styled.div`
    width: 30px;
    height: 30px;
`
const AmountBadge = styled.div`
  position: relative;
  top: -40px;
  left :14px;
  background: #ed80ed;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  padding: 0;
`;