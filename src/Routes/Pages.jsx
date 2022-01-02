import React, {
	Suspense,
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
import { authRoutes } from "./AuthRoutes";
import { appRoutes }  from "./AppRoutes";


const Pages = () => (
	<Suspense fallback={<Loader />}>
		<Routes>
			<Route path="*" element={<Navigate to="/dashboard" />} />


			<Route exact path='/auth' element={<SessionFree />}>
				{ authRoutes.map(({ path, Component }, i) => (
					<Route key={i} exact path={path} element={<><Component /></>} />
				)) }
			</Route>

			<Route exact path='/dashboard' element={<PrivateRoute />}>
				{ appRoutes.map(({ path, Component }, i) => (
					<Route key={i} exact path={path} element={<><Component /></>} />
				)) }
			</Route>


			{/* <Route path="*" element={<Navigate to="/dashboard" />} /> */}
		</Routes>
	</Suspense>
);

export default Pages;
