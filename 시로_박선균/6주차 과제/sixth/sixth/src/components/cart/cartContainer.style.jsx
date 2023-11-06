import styled from 'styled-components';

export const Container = styled.div`
    width : 100%;
    height : 100vh;
    display : flex;
    justify-content : center;
    align-items : center;
`
export const SecondContainer = styled.div`
    width : 80%;
    height : 100%;
    display : flex;
    flex-direction: column;
    align-items : center
    
`
export const PStyling = styled.h1`
    padding-top : 100px;
`
export const WrapItemContainer = styled.div`
    display: flex;
    flex-direction : column;
    margin-bottom: 20px;
`;

export const HorizontalLine = styled.div`
  width: 60%;
  border-bottom: 2px solid #000; 
  margin: 20px 0; 
`;
export const Footer = styled.div`
    width : 60%;
    display : flex;
    justify-content : space-between;
    align-items : center;

`
export const FontStyling = styled.h3`
    font-weight : bold;

`
export const ClearBtn = styled.button`
  padding: 10px 20px;
  border: 2px solid red; 
  color: red; 
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
  border-radius : 6%;
  font-weight : bold;
  width : 15%;
  &:hover {
    background-color: #f5f5f5; 
    cursor: pointer; 
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
`;

export const BtnContainer = styled.div`
  display : flex;
  justify-content: space-between;
  align-items: center;

`

export const YesBtn = styled.button`
  padding: 10px 20px;
  border: 2px solid blue; 
  color: blue; 
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
  border-radius : 6%;
  font-weight : bold;
  &:hover {
    background-color: #f5f5f5; 
    cursor: pointer; 
  }
`;
export const NoBtn = styled.button`
  padding: 10px 20px;
  border: 2px solid red; 
  color: red; 
  background-color: white;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3); 
  border-radius : 6%;
  font-weight : bold;
  
  &:hover {
    background-color: #f5f5f5; 
    cursor: pointer; 
  }
`;