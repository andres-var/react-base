import React, { Suspense, lazy } from "react";
import { Switch, Redirect } from "react-router-dom";

// Import Own Components
import {
	Loader,
	SessionFree,
	PrivateRoute,
} from "Helpers";

const Login = lazy(() => import("./Login"));

// const Login           = lazy(() => import("./Login"));
// const RecoverPassword = lazy(() => import("./RecoverPassword"));
// const ResetPassword   = lazy(() => import("./ResetPassword"));
const HomePage = lazy(() => import("./HomePage"));

// Layouts
const AuthLayout = lazy(() => import("Layout/AuthLayout"));
const AppLayout = lazy(() => import("Layout/AppLayout"));

const Pages = () => (
	<Suspense fallback={<Loader />}>
		<Switch>
			<Redirect exact path="/" to="/dashboard" />

			<SessionFree
				path="/auth"
				render={() => (
					<>
						<AuthLayout>
							<Switch>
								<SessionFree exact path="/auth/login" component={Login} />
							</Switch>
						</AuthLayout>
					</>
				)}
			/>

			<PrivateRoute
				path="/dashboard"
				render={() => (
					<>
						<AppLayout>
							<Suspense fallback={<Loader />}>
								<Switch>
									<PrivateRoute exact path="/dashboard/home" component={HomePage} />

									<Redirect to="/dashboard" />
								</Switch>
							</Suspense>
						</AppLayout>
					</>
				)}
			/>

			<Redirect to="/dashboard" />
		</Switch>
	</Suspense>
);

export default Pages;
