import {createSlice, type PayloadAction} from "@reduxjs/toolkit";
import type {WeatherInfo} from "../../utils/types";
import {fetchWeather} from "../api/fetchWeather.ts";

const weatherSlice = createSlice({
    name: 'weather',
    initialState: {} as WeatherInfo,
    reducers: {
        setWeather: (_state, action) => action.payload,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.pending, () => {
                console.log('Loading weather...');
            })
            .addCase(fetchWeather.fulfilled, (state, action: PayloadAction<WeatherInfo>) => {
                state.country = action.payload.country;
                state.city = action.payload.city;
                state.temp = action.payload.temp;
                state.pressure = action.payload.pressure;
                state.sunset = action.payload.sunset;
            })
            .addCase(fetchWeather.rejected, (_state, action) => {
                console.log(Error, action.payload);
            })
    }
})

export const {setWeather} = weatherSlice.actions;
export default weatherSlice.reducer;