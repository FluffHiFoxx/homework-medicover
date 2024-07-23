import { createTheme } from "@mui/material";

declare module "@mui/material/Button" {
	interface ButtonPropsVariantOverrides {
		card: true;
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: "#fff"
		},
		secondary: {
			main: "#000"
		}
	},
	components: {
		MuiButton: {
			variants: [
				{
					props: { variant: "card" },
					style: {
						color: "#fff",
						textTransform: "none",
						display: "flex",
						flexDirection: "column",
						alignItems: "start"
					}
				},
				{
					props: { variant: "card", color: "secondary" },
					style: {
						color: "#000"
					}
				}
			],
		}
	},
});
