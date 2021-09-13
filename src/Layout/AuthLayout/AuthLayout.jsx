import React from "react";
import useStyles from "./styles";

const AuthLayout = ({
	delegations: {
		children,
	},
}) => {
	const clasess = useStyles();

	return (
		<div className={clasess.root}>
			<div className="authLayout">
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
