import React from "react";

// Our My Layouts
import AuthLayout from "./AuthLayout";

const AuthContainerLayout = ({ children }) => (

	<AuthLayout delegations={{
		children,
	}}
	/>
);

export default AuthContainerLayout;
