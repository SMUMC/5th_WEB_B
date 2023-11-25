import styled from "styled-components";

export const AppContainer = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background-color: #36517a;
  grid-template-columns: repeat(8, 1fr);
  justify-content: space-around;
`;

export const ButtonContainer = styled.div`
  display: flex;
  max-width: 100%;
  flex-direction: row;
  justify-content: center;
  background-color: #36517a;

  h3 {
    margin: 10px;
    font-size: 20px;
    color: white;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 35px;
  margin: 10px;
  border-radius: 20px;
`;
