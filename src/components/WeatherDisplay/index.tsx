import Box from "@mui/material/Box";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { City } from "../../model/City/city";
import { fetchWeather } from "../../model/Weather/weather-api";
import { mapToWeather } from "../../util/response-mapper";
import { getStoredCity, storeCity } from "../../util/storage-manager";
import { LoadingOverlay } from "../Loading";
import { WeatherForecast } from "./Forecast";
import { Diagram } from "./Diagram";
import { SearchModal } from "./SearchModal";

const FIFTEEN_MINUTES_MS = 900000;

export const WeatherDisplay: React.FC = () => {
	const [ city, setCity ] = useState<City | null>(getStoredCity());
	const [ modalOpen, setModalOpen ] = useState<boolean>(!city);

	const { data: cityWeather, isFetching: cityWeatherIsLoading } = useQuery({
		queryKey: ["weather", city],
		queryFn: () => fetchWeather(city!),
		enabled: !!city,
		refetchInterval: FIFTEEN_MINUTES_MS
	});

	const weather = cityWeather && city ? mapToWeather(cityWeather, city.name) : undefined;

	const handleCitySelection = (selectedCity: City) => {
		storeCity(selectedCity);
		setCity(selectedCity);
	};

	return (
		<Box
			display="flex"
			flexDirection="column"
			height="100%"
			width="100%"
		>
			<LoadingOverlay enabled={cityWeatherIsLoading} />
			<WeatherForecast weather={weather} onClick={() => setModalOpen(true)} />
			<Diagram weather={weather} />
			<SearchModal open={modalOpen} onClose={() => setModalOpen(false)} onSubmit={handleCitySelection} />
		</Box>
	);
};
