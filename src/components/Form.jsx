import {useDispatch} from "react-redux";
import {fetchWeather} from "../features/api/weatherActions.js";

const Form = () => {
    const dispatch = useDispatch();

    const getCity = e => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        dispatch(fetchWeather(city));
    }
    return (
        <form onSubmit={getCity}>
            <input name={'city'} type="text" placeholder="City name"/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;