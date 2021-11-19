import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import { composeWithDevTools }          from "redux-devtools-extension";
import thunk                            from "redux-thunk";
import localForage                      from "localforage";

// Import Own Components
import rootReducer from "./Reducers";

const persistConfig = {
	key     : "root",
	storage : localForage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const isProduction = process?.env?.NODE_ENV === "production";

export const Store = createStore(
	persistedReducer,
	isProduction
		? applyMiddleware(thunk)
		: composeWithDevTools(applyMiddleware(thunk)),
);

export const persistor = persistStore(Store);
