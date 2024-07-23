import { CitiesResponse } from "./city";

const CITY_URL = "https://geocoding-api.open-meteo.com/v1/search?";

export const fetchCity = async (cityName: string): Promise<CitiesResponse> => {
	const params = new URLSearchParams({ name: cityName, count: "10", language: "en", format: "json" });
	const response = await fetch(CITY_URL + params);
	return await response.json();
};
