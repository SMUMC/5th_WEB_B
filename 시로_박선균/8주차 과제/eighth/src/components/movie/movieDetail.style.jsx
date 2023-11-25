import styled from 'styled-components';

export const Container = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100%;
    height : 100vh;
    border-radius : 2%;
    background-color : rgba(0,0,0,0);

`

export const WrapContainer = styled.div`
    display : flex;
    width : 95%;
    height : 95%;
    border-radius : 2%;
    background-color : rgba(0,0,0,0.1);
`
export const ImageContainer = styled.div`
    margin-left : 50px;
    margin-top : 50px;
    width : 50%;
    height : 90%;
    justify-content : center;
    align-items : center;
`
export const Image = styled.img`

`
export const ContextContainer = styled.div`
    margin-left : 10px;
    margin-top : 50px;
    width : 70%;
    height : 90%;



`

export const PStyling = styled.p`
    font-weight : bold;
    font-size : 25px;
    margin-top : 20px;
`
export const H1Styling = styled.h1`
    font-size : 50px;

`
export const StarContainer = styled.span`
    color: gold;
    font-size: 1.5em;
`;
export const Loading = styled.div`
    display : flex;
    justify-content : center;
    align-items : center;
    width : 100vw;
    height : 100vh;
`


export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  display : flex;
  align-items : center;
  width : 95%;
  overflow-x: auto; 
  white-space: nowrap; 

`;