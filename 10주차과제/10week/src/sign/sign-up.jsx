
import React, { useState } from "react";
import { useDispatch } from 'react-redux';

import { useNavigate} from "react-router-dom";
import styled from "styled-components";
import { Box, Button, Container } from '@chakra-ui/react'
import { userFailure, userRequest, userSuccess } from "../redux/userSlice";

const Signup = () => {
   
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const dispatch = useDispatch();

    dispatch(userRequest());
    const navigate = useNavigate();

    const validateName = (value) => {
        const regExp =  /^[가-힣a-zA-Z]{2,}$/;
        if (value.trim() === "") return "반드시 닉네임을 입력해주세요.";
        if (!regExp.test(value)) return "문자 2글자 이상 입력해주세요";
        return "";
      };
    
    const validateEmail = (value) => {
        const regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
        if (value.trim() === "") return "반드시 이메일을 입력해주세요.";
        if (!regExp.test(value)) return "이메일 양식에 맞춰주세요.";
        return "";
      };
    
    
    const validatePassword = (value) => {
        const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
        if (value.trim() === "") return "반드시 비밀번호를 입력해주세요.";
        if (value.length <= 4) return "비밀번호는 4자리 이상 입력해주세요.";
        if (value.length > 12) return "비밀번호는 최대 12자리까지 가능합니다.";
        if (!regExp.test(value))
          return "영문 대소문자, 숫자, 특수문자를 사용해서 입력해주세요.";
        return "";
      };
      const validatePasswordConfirm = (value) => {
        if (value.trim() === "") return "반드시 입력해주세요.";
        if (value !== password.value)
          return "작성한 비밀번호와 동일하지 않습니다. 다시 한 번 확인해주세요.";
        return "";
      };
      const handleInputChange = (setter, value, validationFunction) => {
        const error = validationFunction(value);
        setter({ value, error, isValid: !error });
      };
      const handleSignUp = async (e) => {
        e.preventDefault();
        const isValidForm =
          username.isValid && email.isValid && password.isValid && passwordConfirm.isValid;
      
        if (isValidForm) {
          // Assuming you want to save user data in an object
          const userData = {
            username: username.value,
            email: email.value,
            password: password.value,
          };
      
          // Save user data in local storage
          localStorage.setItem('userData', JSON.stringify(userData));
      
          // Dispatch success action if needed
          dispatch(userSuccess());
      
          // Navigate to a different page or perform any other actions
          navigate('/');
        } else {
          // Dispatch failure action if form validation fails
          dispatch(userFailure());
        }
      };
  


  return (
    <Container w='100vw' h='100vh'display='flex' justifyContent='center' alignItems='center' flexDirection='column'>
        <H2>Vivid Talk에 오신 것을 환영합니다.</H2>
        <Box width='100%' display='flex' justifyContent='center' alignItems='center' flexDirection='column' bgColor='white' borderRadius='30px' paddingTop='10px'>
            <FORM method='post'>
                <H1>Vivid Talk</H1>
                <StyledInput type="text" placeholder="닉네임" value={username.value} onChange={(e) => handleInputChange(setUsername, e.target.value, validateName)} />
                <Mes>{username.error}</Mes>
                <StyledInput type="text" placeholder="이메일" value={email.value} onChange={(e) => handleInputChange(setEmail, e.target.value, validateEmail)} />
                <Mes>{email.error}</Mes>
                <StyledInput type="password" placeholder="비밀번호" value={password.value} onChange={(e) => handleInputChange(setPassword, e.target.value, validatePassword)} />
                <Mes>{password.error}</Mes>
                <StyledInput type="password" placeholder="비밀번호 확인" value={passwordConfirm.value} onChange={(e) => handleInputChange(setPasswordConfirm, e.target.value, validatePasswordConfirm)} />
                <Mes>{passwordConfirm.error}</Mes>
                <Button w='70%' colorScheme='teal' variant='outline' type='submit' onClick={handleSignUp} borderColor='black' color='black' margin='10px'>회원가입하기</Button>
            </FORM>
        </Box>
        
    </Container >
  );
};
const Mes = styled.div`
  color: red;
  background-color: transparent;
`;
const FORM = styled.form`
background-color: transparent;
text-align: center;
width: 100%;
height: 100%;
`
const H1 = styled.h1`
    font-size: 24px;
    font-family: 'SOYOMapleBoldTTF';
    background-color: transparent;
    color: black;
    padding-bottom: 20px;
`
const H2 = styled.h2`
    font-size: 24px;
    font-family: 'SOYOMapleBoldTTF';
    background-color: transparent;
    color: white;
    padding-bottom: 20px;
`
const StyledInput = styled.input`
  font-size: 13px;
  background-color: transparent;
  color: black;
  width: 70%;
  height: 30px;
  border-radius: 40px;
  padding-left: 10px;
  border: 1px solid black;
  margin-bottom:10px;
  text-align: center;
`;
export default Signup;
