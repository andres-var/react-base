import {
	lazy,
} from "react";

const LazyLayout = lazy(() => import( /* webpackChunkName: "UsersPage" */ "Layout/AppLayout"));
const HomePage = lazy(() => import( /* webpackChunkName: "HomePage" */ "Pages/HomePage"));


export const appRoutes = [
	{
		to        : "/dashboard",
		path      : "/dashboard/*",
		name      : " DashBoard - DashBoard",
		Component : LazyLayout,
	},
	{
		to        : "/dashboard/home",
		path      : "/dashboard/home",
		Component : HomePage,
		name      : "Home - DashBoard",
	},
];

