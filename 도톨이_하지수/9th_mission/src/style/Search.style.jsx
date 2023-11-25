import styled from "styled-components";

export const FindDiv = styled.div`
  display: flex;
  background-color: #36517a;
  height: 100%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const FindContainer = styled.div``;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  font-size: 40px;
  margin: 15px;
  color: white;
`;
export const Input = styled.input`
  width: 500px;
  height: 50px;
  margin: 12px 0px 5px 0px;
  border-radius: 10px;
`;

export const MovieBox = styled.div`
  display: none;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  place-items: center;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 13px;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffff59;
  }
  width: 1500px;
  height: 1000px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.7);
  margin: 30px 0 50px 0;
`;
