import type {FormEvent} from "react";
import type {FormProps} from "../interfaces.ts";


const Form = ({getWeather}:FormProps) => {
    const getCity= (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const city = e.currentTarget.city.value.trim();
        getWeather(city);

    }
    return (
        <form onSubmit={getCity}>
            <input name={'city'} type="text" placeholder="City name"/>
            <button type={'submit'}>Get Weather</button>
        </form>
    );
};

export default Form;