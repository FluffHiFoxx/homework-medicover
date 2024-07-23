import { City } from "../model/City/city";

const KEY = "city";

export const getStoredCity = (): City | null => {
	const stored = localStorage.getItem(KEY);
	if (stored) {
		const city = JSON.parse(stored) as City;
		return city;
	}
	return null
};

export const storeCity = (city: City) => {
	const jsonCity = JSON.stringify(city);
	localStorage.setItem(KEY, jsonCity);
};
