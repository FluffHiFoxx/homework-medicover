export type WeatherResponse = {
	latitude: number
	longitude: number
	current: CurrentResponse
	daily: DailyResponse
};

export type CurrentResponse = {
	time: string
	interval: number
	temperature_2m: number
	weather_code: number
};

export type DailyResponse = {
	time: string[]
	weather_code: number[]
	temperature_2m_max: number[]
	temperature_2m_min: number[]
	precipitation_sum: number[]
};

export type Forecast = {
	day: string
	rainPrecentage: number
	tempMax: number
	tempMin: number
};

export type Weather = {
	city: string
	temperature: number
	state: string
	forecast: Forecast[]
};
