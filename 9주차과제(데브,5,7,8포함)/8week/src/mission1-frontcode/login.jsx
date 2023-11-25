import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import styled from 'styled-components';
import axios from 'axios';
import { loginUser, userRequest, } from './redux/user';
import { useNavigate } from 'react-router-dom';
const initialState = {
  value: '',
  error: '',
  isValid: false,
};

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [id, setId] = useState(initialState);
  const [pw, setPw] = useState(initialState);
  const isFormValid = id.isValid && pw.isValid;

  const handleInputChange = (setter, value, validationFunction) => {
    const error = validationFunction(value);
    setter({ value, error, isValid: !error });
  };

  const validateId = (value) => {
    const regExp = /^[A-za-z]{5,15}/g;
    if (value.trim() === '') return '반드시 아이디를 입력해주세요.';
    if (!regExp.test(value)) return '문자로 입력해주세요';
    return '';
  };

  const validatePw = (value) => {
    const regExp = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{4,12}$/;
    if (value.trim() === '') return '반드시 비밀번호를 입력해주세요.';
    if (!regExp.test(value))
      return '영문 대소문자, 숫자, 특수문자를 사용해서 입력해주세요.';
    return '';
  };



  const handleLogin = async () => {
    if (id === '' || pw === '') {
      alert('ID 혹은 PW값이 존재하지 않습니다.');
      return;
    }

    dispatch(userRequest());

    try {
      const response = await axios.post('http://localhost:8080/auth/login', {
        username: id.value,
        password: pw.value,
      });

      dispatch(loginUser(response.data));

      localStorage.setItem('token', response.data.token);
      
      alert('로그인 성공');
      
  
      navigate('/');console.log('dispatch(loginUser) 결과:', response.data);
      window.location.reload();
    } catch (error) {
      alert('로그인에 실패하였습니다.');
      console.error('Error ', error);
    }
  };

  return (
    <Container>
      <h1 style={{ color: 'white' }}>로그인 페이지</h1>
      <InputContainer>
        <Input
          type="text"
          placeholder="아이디를 입력해주세요."
          value={id.value}
          onChange={(e) => handleInputChange(setId, e.target.value, validateId)}
        />
        <Mes>{id.error}</Mes>
        <Input
          type="password"
          placeholder="비밀번호를 입력해주세요."
          value={pw.value}
          onChange={(e) => handleInputChange(setPw, e.target.value, validatePw)}
        />
        <Mes>{pw.error}</Mes>
        <br />
        <Btn disabled={!isFormValid} onClick={handleLogin}>
          로그인
        </Btn>
      </InputContainer>
    </Container>
  );
};
const Input = styled.input`
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
  background-color: transparent;
  border-radius: 15px;
  color: white;
  border: 1px solid white;
`;
const InputContainer = styled.div`
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: start;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  height: 90vh;
  flex-direction: column;
  align-items: center;
`;
const Btn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  background-color: white;
  border-radius: 15px;
  box-shadow: 4px 4px 0px 0px;
`;

const Mes = styled.div`
  color: red;
`;

export default Login;