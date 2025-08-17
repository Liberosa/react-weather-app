import {api_key, base_url} from "../../utils/constants.js";
import {setWeather} from "../weather/weatherSlice.js";
import {setMessage} from "../message/messageSlice.js";

export const fetchWeather = (city) =>  {
    return (dispatch) => {
        fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            .then(res => res.json())
            .then(data => {
                dispatch(setWeather({
                    country: data.sys.country,
                    city: data.name,
                    temp: data.main.temp,
                    pressure: data.main.pressure,
                    sunset: (new Date(data.sys.sunset * 1000)).toLocaleTimeString()
                }))
               dispatch(setMessage(''));
            })
            .catch(e => {
                console.log(e)
                dispatch( setMessage('Enter correct city name'))

            })
    }
}