export type CitiesResponse = {
	results: CityResponse[]
};

export type CityResponse = {
	id: number
	name: string
	latitude: number
	longitude: number
	elevation: number
	feature_code: string
	country_code: string
	timezone: string
	population: number
	postcodes: string[]
	country_id: number
	country: string
};

export type City = {
	id: number
	name: string
	latitude: number
	longitude: number
};
