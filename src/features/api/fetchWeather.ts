import {api_key, base_url} from "../../utils/constants.ts";
import {createAsyncThunk} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/types";

export const fetchWeather = createAsyncThunk<WeatherInfo, string>(
    'weather/fetchWeather',
    async (city: string, { rejectWithValue }) => {
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            if (!response.ok) {
                throw new Error('Weather data not found');
            }
            const data = await response.json();
            return {
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: (new Date(data.sys.sunset * 1000)).toLocaleTimeString()
            };
        } catch (error) {
            console.log('Weather fetch error:', error);
            return rejectWithValue('Enter correct city name'); // ← строка, не объект Error
        }
    }
);