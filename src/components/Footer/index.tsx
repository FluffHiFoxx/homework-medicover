import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export const Footer: React.FC = () => {
	return (
		<Box
			display="flex"
			width="100%"
			sx={{ margin: { xs: "2em 0 0 0", md: "2em" } }}
			justifyContent={{ xs: "center", md: "start" }}
			alignItems={{ xs: "flex-end", md: "center" }}
		>
			<Typography variant="caption" >Horváth Ákos</Typography>
		</Box>
	);
};
