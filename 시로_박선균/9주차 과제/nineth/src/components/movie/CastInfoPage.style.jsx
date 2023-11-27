import styled from "styled-components";
export const ActorContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction : column;
  margin-bottom: 10px;
  margin-right : 10px;
`;

export const ActorImage = styled.img`
  border-radius: 50%;
  margin-right: 10px;
  width: 50px;
  height: 50px;
`;

export const ActorInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ActorName = styled.span`
  font-weight: bold;
`;