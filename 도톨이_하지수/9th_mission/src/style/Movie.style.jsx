import styled from "styled-components";

// Movie.jsx
export const MovieContainer = styled.div`
  position: relative;
  width: 160px;
  margin: 15px;
  background-color: rgb(3, 37, 65);
  border-radius: 6px;
  overflow: hidden;

  img {
    max-width: 100%;
  }

  &:hover {
    transform: scale(1.1);
  }
`;

export const MovieInfo = styled.div`
  display: flex;
  margin: 10px;
  justify-content: space-between;
  align-items: center;

  h4 {
    margin: 0;
    font-size: 12px;
    color: white;
  }

  span {
    color: white;
  }
`;
