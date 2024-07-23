import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Weather } from "../../../model/Weather/weather";
import RainIcon from "../../RainIcon";
import Grid from "@mui/material/Grid";

const NO_DATA = "--";

type Props = {
	weather?: Weather
	onClick: () => void
};

export const WeatherForecast: React.FC<Props> = ({
	weather,
	onClick
}) => {

	return (
		<Box
			display="flex"
			flexDirection={{ xs: "column", md: "row" }}
			margin={{ xs: "2em 2em 0 2em", md: "2em 0 2em 0" }}
			flexGrow={3}
		>
			<Box width={{xs: "100%", md: "40%"}} paddingBottom={{ xs: "1em", md: 0 }}>
				<Button onClick={onClick} variant="card">
						<Typography variant="body2" >{weather?.city ?? NO_DATA}</Typography>
						<Typography variant="h2" >{weather?.temperature ?? NO_DATA} °C</Typography>
						<Typography variant="body1" >{weather?.state ?? NO_DATA}</Typography>
				</Button>
			</Box>
			<Box
				display="flex"
				flexDirection="column"
				width={{ xs: "100%", md: "60%" }}
				height="100%"
				justifyContent="space-evenly"
			>
				{weather && (
					<>
						<Typography variant="caption">7 napos előrejelzés</Typography>
						{weather?.forecast.map((forecast, index) => (
							<Grid
								container
								key={forecast.day}
								bgcolor={index === 0 ? "rgb(0, 0, 0, 0.1)" : "none"}
								padding={{ xs: "0.25em", md:"0.5em" }}
								borderRadius={{ xs: 3, md: 5 }}
								alignItems="center"
							>
								<Grid item xs>
									<Typography variant="body1" >{forecast.day ?? NO_DATA}</Typography>
								</Grid>
								<Grid
									container
									item
									xs
									justifyContent="center"
									alignItems="center"
									gap="0.25"
								>
									<RainIcon fontSize={32}/>
									<Typography variant="body1" >
										{forecast.rainPrecentage ?? NO_DATA}%
									</Typography>
								</Grid>
								<Grid
									container
									item
									xs
									justifyContent="end"
									alignItems="center"
								>
									<Typography variant="body2" >
										{forecast.tempMax ?? NO_DATA} °C / {forecast.tempMin ?? NO_DATA} °C
									</Typography>
								</Grid>
							</Grid>
						))}
					</>
				)}
			</Box>
		</Box>
	);
};