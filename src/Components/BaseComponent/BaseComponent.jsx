import React     from "react";
import useStyles from "./styles";

const BaseComponent = () => {
	const clasess = useStyles();

	return (
		<h4 className={clasess.root}>Componente base</h4>
	);
};

export default BaseComponent;
