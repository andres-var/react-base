import React from "react";

const AuthLayout = ({
	delegations: {
		children,
	},
}) => {
	return (
		<div>
			<div className="authLayout">
				{children}
			</div>
		</div>
	);
};

export default AuthLayout;
