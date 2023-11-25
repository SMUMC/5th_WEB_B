import styled from "styled-components";
import { Link } from 'react-router-dom'; // react-router-dom에서 Link import


export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const Input = styled.input`
  width: 70%;
  height: 40px;
  margin-bottom: 20px;
  border: 2px solid #7e57c2;
  border-radius: 5px;
  padding: 10px;
  font-size: 18px;
`;

export const SearchResultContainer = styled.div`
  width: 70%;
  max-height: 400px;
  overflow-y: auto;
  background-color: #ffffff;
  border: 2px solid #7e57c2;
  border-radius: 10px;
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;
`;

export const SearchResult = styled.div`
  display: flex;
  justify-content : space-between;
  align-items : center;
  rgba(0, 0, 0, 0.1);
`;

export const MovieImage = styled.img`
  width: 30%;
  height: 100%;
  object-fit: cover;
  margin-bottom: 10px;
`;
export const ContentsContainer = styled.div`
    display: flex;
    justify-content : space-between;
    align-items : end;
    flex-direction : column;
`;
export const PStyling = styled.p`
    font-weight : bold;
    font-size : 25px;
    margin-top : 20px;
`
export const H1Styling = styled.h1`
    font-size : 50px;

`
export const StarContainer = styled.span`
    color: ${props => props.boxColor || 'gold'};
    font-size: 1.5em;
`;
export const StyledLink = styled(Link)`
  text-decoration: none; 
  color: black; 
`;
