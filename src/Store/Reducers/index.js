import { combineReducers } from "redux";

// Import Own Components
import authReducer from "./authReducer";

export const reducers = {
	authReducer,
};

const rootReducers = combineReducers(reducers);

export default rootReducers;
