import { fetchClient } from "Helpers";
import AuthActions     from "Store/Actions/AuthActions";
// import AuthActions from "Store/Actions/AuthActions";

const login = (values) => async (dispatch) => {
	try {
		const body = new FormData();

		body.append("email", values.email);
		body.append("password", values.password);

		const response = await fetchClient("/login", {
			method : "POST",
			body,
		});

		const {
			token,
			user,
		} = await response.json();

		if (token && user) {
			dispatch(AuthActions.setUserData(token, user));

		} else {
			throw response;
		}
	} catch (err) {
		console.error("[AuthService.login] ", err);
	}
};

const AuthServices = {
	login,
};

export default AuthServices;
