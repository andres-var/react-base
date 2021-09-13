import React from "react";
import useStyles from "./styles";

const HomePage = () => {
	const clasess = useStyles();

	return (
		<h4 className={clasess.root}>Desde el home</h4>
	);
};

export default HomePage;
