import React from "react";
import { connect } from "react-redux";
import { Redirect, Route } from "react-router-dom";

const SessionFree = ({
	component: Component,
	render: RenderComponent,
	loggedIn = false,
	...rest
}) => (
	<Route
		{...rest}
		render={(props) => (
			loggedIn
				? (<Redirect to="/dashboard" />)
				: (RenderComponent
					? (<RenderComponent {...props} />)
					: (<Component {...props} />)
				)
		)}
	/>
);

const mapStateToProps = ({ authReducer }) => ({ loggedIn : authReducer?.loggedIn ?? false });

export default connect(mapStateToProps)(SessionFree);
