import CloseModalIcon from "@mui/icons-material/CloseFullscreen";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useQuery } from "@tanstack/react-query";
import { FormEvent, useState } from "react";
import { City, CityResponse } from "../../../model/City/city";
import { fetchCity } from "../../../model/City/city-api";
import { mapToCity } from "../../../util/response-mapper";
import { Loading } from "../../Loading";

type Props = {
	open: boolean
	onClose: () => void
	onSubmit: (city: City) => void
};

export const SearchModal: React.FC<Props> = ({
	open,
	onClose,
	onSubmit
}) => {
	const [ searchedCity, setSearchedCity ] = useState<string>("");
	const [ cityName, setCityName ] = useState<string>(searchedCity);

	const { data: cities, isFetching: citiesAreLoading } = useQuery({
		queryKey: ["weather", searchedCity],
		queryFn: () => fetchCity(cityName!),
		enabled: !!searchedCity,
		select: (data) => data.results
	});

	const searchForCity = (event: FormEvent) => {
		event.preventDefault();
		setSearchedCity(cityName);
	};

	const onCitySelect = (city: CityResponse) => {
		onSubmit(mapToCity(city));
		onClose();
	};

	return (
		<>
			{open && (
				<Box
					display="flex"
					flexWrap="wrap"
					position="absolute"
					top={0}
					left={0}
					zIndex={1}
					width="100%"
					height="100%"
					justifyContent="center"
					alignContent="center"
					sx={{ background: "rgb(0, 0, 0, 0.2)" }}
				>
					<Card sx={{ width: { xs: "90%", md: "50%", lg: "40%" }, height: "80%" }}>
						<CardHeader
							title="Város kereső"
							action={
								<IconButton onClick={onClose}>
									<CloseModalIcon />
								</IconButton>
							}
						/>

						<CardContent sx={{ display: "flex", flexDirection: "column", height: "80%"}}>
							<Box
								display="flex"
								justifyContent="center"
								alignItems="center"
								gap="1em"
								paddingBottom="2em"
								component="form"
								onSubmit={searchForCity}
							>
								<TextField
									autoFocus
									type="text"
									variant="filled"
									value={cityName}
									onChange={(event) => setCityName((event.target as HTMLInputElement).value)}
								/>
								<IconButton type="submit">
									<SearchIcon />
								</IconButton>
							</Box>

							<Loading enabled={citiesAreLoading} />

							<List sx={{ height: "100%", overflow: "auto" }}>
								{!citiesAreLoading && !!cities && cities.map((city, index) => (
									<ListItemButton
										key={index}
										onClick={() => onCitySelect(city)}
										divider
									>
										<Grid container>
												<Grid container item xs={7} justifyContent="start" alignItems="center">
													<Typography textOverflow="ellipsis" variant="h6">{city.name}</Typography>
												</Grid>
												<Grid container item xs={5} justifyContent="center" alignItems="center">
													<Typography textOverflow="ellipsis" variant="body1">{city.country}</Typography>
												</Grid>
											</Grid>
									</ListItemButton>
								))}
							</List>
						</CardContent>
					</Card>
				</Box>
			)}
		</>
	);
};
