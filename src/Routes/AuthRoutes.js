import {
	lazy,
} from "react";

const AuthLayout = lazy(() => import( /* webpackChunkName: "UsersPage" */ "Layout/AuthLayout"));
const LoginPage = lazy(() => import( /* webpackChunkName: "LogoinPage" */ "Pages/LoginPage"));
const RegisterPage = lazy(() => import( /* webpackChunkName: "LogoinPage" */ "Pages/RegisterPage"));


export const authRoutes = [
	{
		to        : "/auth",
		path      : "/auth/*",
		name      : " auth - auth",
		Component : AuthLayout,
	},
	{
		to        : "/auth/login",
		path      : "/auth/login",
		Component : LoginPage,
		name      : "Inicio de sesión",
	},
	{
		to        : "/auth/register",
		path      : "/auth/register",
		Component : RegisterPage,
		name      : "Registro",
	},
];

