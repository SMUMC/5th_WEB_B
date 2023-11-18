import styled from "styled-components";

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