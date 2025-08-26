import {createSlice} from "@reduxjs/toolkit";
import {fetchWeather} from "../api/fetchWeather.ts";

const messageSlice = createSlice({
    name: 'message',
    initialState: 'Enter city name',
    reducers: {
        setMessage: (_state, action) => action.payload,
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchWeather.fulfilled, () => '') // Очищаем сообщение при успехе
            .addCase(fetchWeather.rejected, (_state, action) => {
                return action.payload as string || 'Enter correct city name'; // Возвращаем строку
            });
    }
});

export const {setMessage} = messageSlice.actions;
export default messageSlice.reducer;