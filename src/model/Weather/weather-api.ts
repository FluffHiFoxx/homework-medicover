import { City } from "../City/city";
import { WeatherResponse } from "./weather";

const WEATHER_URL = "https://api.open-meteo.com/v1/forecast?";

export const fetchWeather = async (cityData: City): Promise<WeatherResponse> => {
	const params = new URLSearchParams({
		latitude: cityData.latitude.toString(),
		longitude: cityData.longitude.toString(),
		current: ["temperature_2m", "weather_code"].join(","),
		daily: ["weather_code", "temperature_2m_max", "temperature_2m_min", "precipitation_probability_max"].join(",")
	});
	const response = await fetch(WEATHER_URL + params);
	return await response.json();
};
