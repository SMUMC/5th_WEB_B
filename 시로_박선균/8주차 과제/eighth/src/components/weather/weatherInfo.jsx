import {StyledWeatherInfoContainer,StyledPOfWeather,StyledPOfCityName,StyledPOfTemp} from './weatherInfo.style';

function WeatherInfoPage({ cityName, temperature, weatherState }){
    return(
    <StyledWeatherInfoContainer>
        <StyledPOfCityName>{cityName}</StyledPOfCityName>
        <StyledPOfTemp>{temperature}°C</StyledPOfTemp>
        <StyledPOfWeather>{weatherState}</StyledPOfWeather>
    </StyledWeatherInfoContainer>
    )
}
export default WeatherInfoPage;