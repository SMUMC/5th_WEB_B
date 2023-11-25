import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: row;
  background-color: gray;
  margin: 1%;
  width: 98%;
  border-radius: 10px;
`;

export const DetailImg = styled.img`
  width: 200px;
  height: 300px;
  margin: 30px;
`;

export const DetailContext = styled.div`
  margin: 30px;

  h1 {
    font-size: 35px;
  }

  h2 {
    font-size: 25px;
    display: grid;
    gap: 4px;
  }

  h3 {
    font-size: 20px;
  }
`;

export const DetailCast = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-items: center;
  overflow-y: scroll;

  width: 90%;
  height: 250px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  margin: 10px;
  padding: 20px;

  &::-webkit-scrollbar {
    width: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: black;
    border-radius: 40px;
  }
`;
