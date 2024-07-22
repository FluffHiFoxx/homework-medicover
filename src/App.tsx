import Box from "@mui/material/Box";
import { WeatherDisplay } from "./components/WeatherDisplay";
import { Footer } from "./components/Footer";

const App = (): JSX.Element => {
	return (
		<Box
			display="flex"
			flexDirection="column"
			margin="auto"
			justifyContent="center"
			alignItems="center"
			height="100%"
			width={{xs: "100%", md: "60%"}}
		>
			<WeatherDisplay/>
			<Footer/>
		</Box>
	);
};

export default App;
