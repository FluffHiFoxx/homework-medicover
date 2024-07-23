import { Box, CircularProgress } from "@mui/material";
import React from "react";

type Props = {
	enabled: boolean
};

export const Loading: React.FC<Props> = ({ enabled }) => {
	return (
		<>
			{enabled && (
				<Box
					display="flex"
					flexWrap="wrap"
					justifyContent="center"
					alignItems="center"
					height="100%"
					width="100%"
				>
					<CircularProgress color="secondary" />
				</Box>
			)}
		</>
	)
}

export const LoadingOverlay: React.FC<Props> = ({ enabled }) => {
	return (
		<>
			{enabled && (
				<Box
					position="fixed"
					zIndex={1000}
					display="flex"
					justifyContent="center"
					alignItems="center"
					left={0}
					top={0}
					height="100%"
					width="100%"
					sx={{ background: "rgba(0,0,0,0.2)" }}
				>
					<CircularProgress size="5em" />
				</Box>
			)}
		</>
	);
};
