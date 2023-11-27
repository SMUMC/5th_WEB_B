import styled from "styled-components";

export const StyledWeatherInfoContainer = styled.div`
  margin-top : 50px;
  display: flex;
  width : 250px;
  height : 250px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 10px;
`;
export const StyledPOfCityName = styled.p`
    font-size : 30px;
    align-self : left;
`
export const StyledPOfTemp = styled.p`
    font-size : 30px;
    font-weight : 600;
    align-self : center;
`
export const StyledPOfWeather = styled.p`
    font-size : 25px;
    align-self : flex-end;
`