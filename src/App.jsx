import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { CssBaseline } from "@material-ui/core";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import moment from "moment";

// Import Own Components
import { theme, Loader } from "./Helpers";
import Pages from "./Pages";
import { Store, persistor } from "./Store";

moment.locale("es");

function App() {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<Provider store={Store}>
					<PersistGate loading={<Loader />} persistor={persistor}>
						<CssBaseline />
						<Pages />
					</PersistGate>
				</Provider>
			</ThemeProvider>
		</Router>
	);
}

export default App;
