import React, {
	Suspense,
	lazy,
} from "react";

import {
	Navigate,
	Route,
	Routes,
} from "react-router-dom";

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

const Pages = () => (
	<Suspense fallback={<Loader />}>
		<Routes>
			<Route path="*" element={<Navigate to="/dashboard" />} />


			<Route exact path='/auth' element={<SessionFree />}>
				{/* <AuthLayout> */}
				<Route exact path="/auth/login" element={<Login />} />
				{/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
				{/* </AuthLayout> */}
			</Route>

			<Route exact path='/dashboard' element={<PrivateRoute />}>
				{/* <AuthLayout> */}
				<Route exact path="/dashboard/home" element={<HomePage />} />
				{/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
				{/* </AuthLayout> */}
			</Route>


			{/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
		</Routes>
	</Suspense>
);

export default Pages;
