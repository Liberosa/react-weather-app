interface WeatherInfo {
    country?: string;
    city?: string;
    temp?: number;
    pressure?: number;
    sunset?: Date|undefined;
}

interface WeatherProps {
    weather: WeatherInfo;
    message: string;
}

interface FormProps {
    getWeather: (city: string) => void;
}

export type {WeatherProps, FormProps, WeatherInfo}