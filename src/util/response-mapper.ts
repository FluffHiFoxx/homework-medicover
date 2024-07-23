import { City, CityResponse } from "../model/City/city";
import {
	DailyResponse,
	Forecast,
	Weather,
	WeatherResponse
} from "../model/Weather/weather";
import wmoCodes from "./wmo-codes.json";


const DAYS_OF_WEEK = [
	"Vasárnap",
	"Hétfő",
	"Kedd",
	"Szerda",
	"Csütörtök",
	"Péntek",
	"Szombat"
];

export const mapToWeather = (weatherResponse: WeatherResponse, cityName: string): Weather => {
	const weatherCode = weatherResponse.current.weather_code.toString();
	const weatherState = wmoCodes as { [key: string]: string };

	return ({
		city: cityName,
		temperature: weatherResponse.current.temperature_2m,
		state: weatherState[weatherCode],
		forecast: mapToForecast(weatherResponse.daily)
	});
};

const mapToForecast = (daily: DailyResponse): Forecast[] => {
	return daily.time.map((time, i) => ({
		day: DAYS_OF_WEEK[new Date(time).getDay()],
		rainPrecentage: daily.precipitation_sum[i],
		tempMax: daily.temperature_2m_max[i],
		tempMin: daily.temperature_2m_min[i]
	}));
};

export const mapToCity = (city: CityResponse): City => {
	return ({
		id: city.id,
		name: city.name,
		longitude: city.longitude,
		latitude: city.latitude
	});
};
