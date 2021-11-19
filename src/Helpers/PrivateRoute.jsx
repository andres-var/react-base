import React, { lazy }      from "react";
import { connect }          from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

// our componets
const AppLayout = lazy(() => import("Layout/AppLayout"));

const PrivateRoute = ({	loggedIn = false }) => (
	loggedIn ? <AppLayout><Outlet /></AppLayout> : <Navigate to="/auth/login" />
);

const mapStateToProps = ({ authReducer }) => ({ loggedIn : authReducer?.loggedIn ?? false });

export default connect(mapStateToProps)(PrivateRoute);
