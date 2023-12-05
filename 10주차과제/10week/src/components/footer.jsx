import React from 'react'
import { ExternalLinkIcon, SearchIcon} from '@chakra-ui/icons'
import  {Link as LinkRoute }  from 'react-router-dom'
import styled from 'styled-components'
import { Link } from '@chakra-ui/react'
export default function Footer() {
  return (
    <FootContainer>
        <Option>
            <H1>비비드 톡은 처음이신가요?</H1>
            <Span>지금 가입해서 새로운 사람들과 다채로운 경험과 소통을 즐겨보세요!</Span>
            <StyledLink to="/signup">
                <BtnModule ><H2>회원가입</H2></BtnModule>
            </StyledLink>
            <Link href='https://github.com/201910825' isExternal>
                 Made By Jimin <ExternalLinkIcon mx='2px' /></Link>
            <InputContainer>
                <StyledInput placeholder='Search..'/>
                <SearchIcon marginRight='10px'/>
            </InputContainer>
            
        </Option>
        
    </FootContainer>
  )
}
const FootContainer = styled.div`
    width: 25%;
`
const StyledInput = styled.input`
  position: absolute;
  font-size: 16px;
  background-color: transparent;
  color: white;
  width: 100%;
  height: 30px;
  border-radius: 40px;
  padding-left: 10px;
`;
const InputContainer = styled.div`
    display: flex;
    border-radius: 40px;
    border: 1px solid #ccc;
    height: 30px;
    align-items: center;
    position: relative;
    justify-content: flex-end;
`
const H1 = styled.h1`
    margin: 0;
    font-size:20px;
    padding: 0;
    background-color: transparent;

`
const H2 = styled.h2`
    margin: 0;
    font-size:20px;
    padding: 0;
    background-color: transparent;
    color: black;
    
`
const Span = styled.span`
    color: rgb(113, 118, 123);
    font-size: 14px;
`
const Option = styled.div`
    font-family: 'Pretendard-Regular';
    width: 80%;
    align-items: stretch;
    border: 0 solid black;
    box-sizing: border-box;
    display: flex;
    flex-basis: auto;
    flex-direction: column;
    list-style: none;
    margin: 0px;
    margin-left: 20px;
    margin-bottom: 20px;
    min-height: 0px;
    min-width: 0px;
    padding: 10px;
    top: 20px;
    position: sticky;
    text-decoration: none;
    z-index: 3;
    border: 1px solid grey;
    border-radius: 20px;
`
const StyledLink = styled(LinkRoute)`
    text-decoration: none;
`
const BtnModule = styled.div`
    background-color: white;
    border-radius: 30px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
    transition: background-color 0.3s ease;
    &:hover {
        background-color:lightblue;
        color: white;
    }
`