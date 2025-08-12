import Form from "./Form.tsx";
import Weather from "./Weather.tsx";
import {useState} from "react";
import {api_key, baseURL} from "../utils/constants";
import type {WeatherInfo} from "../utils/types.d.ts";

const Data = () => {
    const [message, setMessage] = useState('Enter city name');
    const [weatherInfo, setWeatherInfo] = useState<WeatherInfo>({});
    const getWeather = (city:string) => {
        fetch(`${baseURL}?q=${city}&appid=${api_key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                setWeatherInfo({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: (new Date(data.sys.sunset * 1000)),
                });
                setMessage('')
            })
            .catch(err => {
                console.log(err)
                setMessage('Enter correct city name')
            })
    }
        return (
            <div>
                <Form getWeather={getWeather}/>
                <Weather weather={weatherInfo} message={message}/>
            </div>
        );

};

export default Data;