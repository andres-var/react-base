import React, { lazy }      from "react";
import { connect }          from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

// our componets
const AuthLayout = lazy(() => import("Layout/AuthLayout"));
const SessionFree = ({ loggedIn = false }) => (
	!loggedIn ? <AuthLayout><Outlet /></AuthLayout> : <Navigate to="/dashboard" />
);

const mapStateToProps = ({ authReducer }) => ({ loggedIn : authReducer?.loggedIn ?? false });

export default connect(mapStateToProps)(SessionFree);
