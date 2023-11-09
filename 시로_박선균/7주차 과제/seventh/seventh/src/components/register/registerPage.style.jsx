import styled from "styled-components";

export const SignupContainer =styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  width : 100vw;
  height : 100vh;

`
export const SignupFormContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  width : 50%;
  height : 70%;
  flex-direction : column;
  background-color : rgba(0, 0, 228, 0.68);
  border-radius : 20px;

`
export const Input = styled.input`
    outline: none;
    height: 45px;
    width: 400px;
    border-radius: 25px;
    border-color: rgba(0,0,0);
`
export const Button = styled.button`
    outline: none;
    height: 45px;
    width: 200px;
    border-radius: 25px;
    border-color: white;
    margin-top : 20px;
    background-color : white;

`
export const PStyling = styled.p`
  color : red;
`