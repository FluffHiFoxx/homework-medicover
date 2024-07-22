import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import RainIcon from "../RainIcon";

//TODO: Remove after fetch implementation
const DEFAULT_WEATHER = {
	city: "Város név",
	temperature: null,
	state: "Időjárás",
	week: [
		{
			day: "Nap",
			rain: 0,
			tempMax: null,
			tempMin: null
		}
	]
};

export const WeatherDisplay: React.FC = () => {
	const weather = DEFAULT_WEATHER;

	return (
		<Box
			display="flex"
			flexDirection="column"
			height="100%"
			width="100%"
		>
			<Box
				display="flex"
				flexDirection={{ xs: "column", md: "row" }}
				margin={{ xs: "2em 2em 0 2em", md: "4em 0 2em 0" }}
				flexGrow={3}
			>
				<Box width="40%" paddingBottom={{ xs: "4em", md: 0 }}>
					<Typography variant="body2" >{weather.city}</Typography>
					<Typography variant="h2" >{weather.temperature ?? "--"} °C</Typography>
					<Typography variant="body1" >{weather.state}</Typography>
				</Box>
				<Box
					display="flex"
					flexDirection="column"
					width={{ xs: "100%", md: "60%" }}
					height="100%"
					justifyContent="space-evenly"
				>
					<Typography variant="caption">7 napos előrejelzés</Typography>
					{[...Array(7)].map((i, index) => (
						<Box key={index} display="flex" justifyContent="space-between">
							<Typography variant="h6" >{weather.week[i]?.day ?? weather.week[0].day}</Typography>
							<Box display="flex" gap="0.25em">
								<RainIcon fontSize={32}/>
								<Typography variant="h6" >
									{weather.week[i]?.rain ?? weather.week[0].rain}%
								</Typography>
							</Box>
							<Typography variant="h6" >
								{weather.week[i]?.tempMax ?? "--"} °C / {weather.week[i]?.tempMin ?? "--"} °C
							</Typography>
						</Box>
					))}
				</Box>
			</Box>

			{/* TODO: Remove -- Placeholder for actual LineChart vvv */}
			<Box
				flexGrow={4}
				margin={{ xs: "0 2em 0 2em", md:"0 0 0 40%" }}
				sx={{
					border: 2,
					borderColor: "#fff",
					borderRadius: 10
				}}
			/>
			{/* TODO: Remove -- Placeholder for actual LineChart ^^^ */}
		</Box>
	);
};
