import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { Box, Button } from "@chakra-ui/react";
import { userRequest } from '../redux/userSlice';

function Header() {
  const dispatch = useDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const storedUserData = localStorage.getItem('userData');
  const parsedUserData = JSON.parse(storedUserData)|| {};
  const dummyToken = 'exampleToken';
// 가져온 객체의 필드 사용 예시
  const storedEmail = parsedUserData.email|| '';
  const storedUsername = parsedUserData.username|| '';
  const storedPassword = parsedUserData.password|| '';
  const storedToken = localStorage.getItem('token');
  // 페이지 로딩 시에 저장된 토큰을 확인하여 로그인 상태를 설정
  useEffect(() => {
    
    if (storedToken) {
      setIsLoggedIn(true);
    }
  }, [storedToken]);

  const handleLogin = () => {
    // 로그인 처리 로직...
    if(!storedToken && (username === storedEmail )&&(storedPassword===password)){
      localStorage.setItem('token', dummyToken);

          // 로그인 상태를 업데이트
      setIsLoggedIn(true);

      // 로그인 액션을 디스패치
      dispatch(userRequest());
      alert("로그인 성공");
      window.location.reload()
    }
     else alert("존재하지 않는 계정입니다.")
   
  }

  const handleLogout = () => {
    // 로그아웃 처리 로직...

    // 로컬 스토리지에서 토큰을 삭제
    localStorage.removeItem('token');

    // 로그인 상태를 업데이트
    setIsLoggedIn(false);

    alert("로그아웃 성공");
  }

  return (
    <ContainingHeader>
      <StyledHeader>
        <StyledLink to="/" style={{ textDecoration: "none" }}>
          <StyledTitle>Vivid Tok</StyledTitle>
        </StyledLink>
        {isLoggedIn ? (
          // 로그인 상태에 따른 컴포넌트 렌더링
            <Box zIndex="0" w='100%' bg="rgb(22, 24, 28);"display='flex' flexDirection='column' alignItems='center' borderRadius='30px' paddingTop='10px'>
              {storedUsername}님 반갑습니다.
              <Button
                onClick={handleLogout}
                colorScheme='teal'
                variant='outline'
                w='80%'
                borderColor='white'
                color='white'
                margin='10px'
              >
                로그아웃
              </Button>
              <StyledLink to="/makelist" style={{ textDecoration: "none" }}>
                내 프로필
              </StyledLink>
              <StyledLink to="/makelist" style={{ textDecoration: "none" }}>
                새 게시물
              </StyledLink>
            </Box>
            
            
        ) : (
          // 로그인 상태에 따른 컴포넌트 렌더링
            <Box w='100%' bgColor='rgb(22, 24, 28);' display='flex' flexDirection='column' alignItems='center' borderRadius='30px' paddingTop='10px'>
              <StyledInput type="text" placeholder="이메일" value={username.value} onChange={(e) => setUsername(e.target.value)} />
              <StyledInput type="password" placeholder="비밀번호" value={password.value} onChange={(e) => setPassword(e.target.value)} />
              <Button
                onClick={handleLogin}
                colorScheme='teal'
                variant='outline'
                w='80%'
                borderColor='white'
                color='white'
                margin='10px'
              >
                로그인
              </Button>
            </Box>
        )}
      </StyledHeader>
    </ContainingHeader>
  );
}

const StyledInput = styled.input`
  font-size: 13px;
  background-color: transparent;
  color: white;
  width: 90%;
  height: 30px;
  border-radius: 40px;
  padding-left: 10px;
  border: 1px solid white;
  margin-bottom:10px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'SOYOMapleBoldTTF';
  padding-top: 10px;
  padding-bottom: 10px;
`;

const StyledHeader = styled.div`
  width: 60%;
  height: 100%;
  display: flex;
  flex-direction: column;
  z-index: 4;
  align-items: center;
  position: sticky;
  top:20px;
`;

const ContainingHeader = styled.div`
  width : 30%;
  height: 100vh;
  position: sticky;
  top: 0px;
  z-index: 3;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const StyledTitle = styled.h1`
  background: linear-gradient(90deg,#1489fe 25%,#fe50e7 75%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 25px;
  padding-top:20px;
  font-family: 'SOYOMapleBoldTTF';
`;

export default Header;
