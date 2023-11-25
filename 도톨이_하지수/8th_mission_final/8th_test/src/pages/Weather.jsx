import React, { useState } from "react";
import axios from "axios";
import { StyledInput, StyledButton, StyledWeather } from "./Weather.style";

export default function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const handleEnterKey = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=099c992d482b861bd182aae7ebe867e4`
      );

      const weatherInfo = response.data;
      setWeather(weatherInfo);
    } catch (error) {
      console.error("Error data:", error);
    }
  };

  const handleChangeValue = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <StyledInput
        type="text"
        placeholder="도시를 입력하세요."
        value={city}
        onChange={handleChangeValue}
      />
      <StyledButton onClick={handleEnterKey}>Submit</StyledButton>
      {weather && (
        <StyledWeather>
          <h3>도시명: {weather.name} </h3>
          <h3>날씨: {weather.weather[0].description} </h3>
          <h3>온도: {Math.round((weather.main.temp - 273.15) * 10) / 10} C</h3>
        </StyledWeather>
      )}
    </div>
  );
}
