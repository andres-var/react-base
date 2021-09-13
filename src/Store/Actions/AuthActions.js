// Import Own Components
import {
	SET_USER_DATA,
} from "Store/Constants";

const setUserData = (token, data, social = false) => ({
	type    : SET_USER_DATA,
	payload : {
		token,
		data,
		social,
	},
});

const AuthActions = {
	setUserData,
};

export default AuthActions;
