import React                       from "react";
import { PersistGate }             from "redux-persist/integration/react";
import { Provider }                from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import moment                      from "moment";

// Import Own Components
import { Loader }           from "./Helpers";
import Pages                from "./Routes";
import { Store, persistor } from "./Store";

moment.locale("es");

function App() {
	return (
		<Router>
			<Provider store={Store}>
				<PersistGate loading={<Loader />} persistor={persistor}>
					<Pages />
				</PersistGate>
			</Provider>
		</Router>
	);
}

export default App;
