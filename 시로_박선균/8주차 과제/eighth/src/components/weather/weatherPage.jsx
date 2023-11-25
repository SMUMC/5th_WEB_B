import React, { useEffect, useState } from "react";
import axios from 'axios';
import useDebounce from "../movie/useDebounce";
import { Input, Container } from './weather.style';
import WeatherInfoPage from "./weatherInfo";

function WeatherPage() {
    const [weather, setWeather] = useState({
        cityName: '',
        temperature: '',
        weatherState: ''
    });
    const [IsSuccess,setIsSuccess] = useState(false);
    const [userInput, setUserInput] = useState("");
    const APIKEY = "62ab1a82ccdc8f500c06ce702ca2f432";
    const [apiUrl, setApiUrl] = useState("");
    const debouncedInputValue = useDebounce(userInput, 500);

    useEffect(() => {
        if (userInput !== "") {
            setApiUrl(`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${APIKEY}&units=metric`);
        }
    }, [debouncedInputValue]);

    useEffect(() => {
        if(apiUrl !== ""){
            fetchWeatherInfo();
        }
    }, [apiUrl]);

    const fetchWeatherInfo = async () => {
        try {
            const response = await axios.get(apiUrl);

            const cityName = response.data.name;
            const weatherState = response.data.weather[0].main;
            const temp = response.data.main.temp;

            setWeather({
                cityName,
                temperature: temp.toFixed(2), 
                weatherState
            });
            setIsSuccess(true);
        } catch (error) {
            console.error("Error fetching weather info: ", error);
        }
    }

    return (
        <Container>
            <Input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
            />
            {IsSuccess === true && <WeatherInfoPage {...weather}/>}

        </Container>
    )
}

export default WeatherPage;
