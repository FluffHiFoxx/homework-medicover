import Box from "@mui/material/Box";
import {
	chartsGridClasses,
	LineChart,
	lineElementClasses,
	LineSeriesType
} from "@mui/x-charts";
import { Weather } from "../../../model/Weather/weather";

type Props = {
	weather?: Weather
};

export const Diagram: React.FC<Props> = ({ weather }) => {
	const maxTemperatures = weather?.forecast.map((forecast) => forecast.tempMax) ?? [];
	const days = weather?.forecast.map((forecast) => forecast.day) ?? [];

	const series: LineSeriesType[] = [{
		label: "C°",
		type: "line",
		data: maxTemperatures,
		showMark: false,
		color: "#fff"
	}];

	return (
		<Box
			height={{xs: "30%" ,md: "40%"}}
			margin={{ xs: "0 2em 0 2em", md:"0 0 0 40%" }}
			sx={{
				border: 2,
				borderColor: "primary",
				borderRadius: 10
			}}
		>
			<LineChart
				series={series}
				slotProps={{ legend: { hidden: true } }}
				margin={{
					top: 40,
					right: 0,
					bottom: 0,
					left: 0
				}}
				xAxis={[{ scaleType: "point", data: days, disableLine: true, disableTicks: true }]}
				yAxis={[{ disableLine: true }]}
				axisHighlight={{ x: "none" }}
				grid={{ horizontal: true }}
				sx={{
					[`& .${lineElementClasses.root}`]: {
						stroke: "#fff",
						strokeWidth: 2
					},
					[`& .${chartsGridClasses.line}`]: {
						stroke: "rgb(255, 255, 255, 0.5)",
						strokeWidth: 1
					}
				}}
			/>
		</Box>
	);
};
