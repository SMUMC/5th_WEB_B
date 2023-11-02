import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";

import { ChevronDown, ChevronUp } from "../lib/icon";
import { incrementAmount, decrementAmount,} from '../redux/user';

export default function Music({ index, img, title, singer, price}) {
    const dispatch = useDispatch();
    const userAmount = useSelector((state) => state.user.cartItems[index].amount);
  
    const handleIncrement = () => {
      dispatch(incrementAmount({ index }));
    };
    const handleDecrement = () => {
        dispatch(decrementAmount({ index }));
      };
  
    return (
      <Container>
        <ListImg src={img} alt="이미지 전송 실패" />
        <ListInfo>
          <H6>
            {title} | {singer}
          </H6>
          <H6> ₩ {price}</H6>
        </ListInfo>
        <ListAmount>
            <Btn onClick={handleIncrement}><ChevronUp/></Btn>{userAmount}
            {userAmount > 0 ? ( 
            <>
               
                <Btn onClick={handleDecrement} disabled={userAmount === 0}><ChevronDown/></Btn>
            </>
            ) : null}
      </ListAmount>
      
      </Container>
    );
  }

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 70px;
    margin: 15px;
`
const ListImg = styled.img`
    max-height: 100%;
    width: 10%;
    margin-right: 5px;
`

const ListInfo = styled.div`
    width: 75%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const ListAmount = styled.div`
    width: 15%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`

const H6 = styled.h6`
    margin: 0;
    padding: 0;
`
const Btn = styled.button`
    background-color: transparent;
    border:none;
    width: 40px;
    height: 30px;
`