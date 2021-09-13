import React from "react";
import useStyles from "./styles";

const AppLayout = ({ children }) => {
	const clasess = useStyles();

	return (
		<div>
			<h4 className={clasess.root}>AppLayout</h4>
			{children}
		</div>
	);
};

export default AppLayout;
