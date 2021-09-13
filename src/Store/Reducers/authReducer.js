import {
	SET_USER_DATA,
	CLEAR_USER_DATA,
} from "Store/Constants";

const inS = {
	loggedIn : false,
};

const authReducer = (state = inS, action) => {
	switch (action.type) {
		case SET_USER_DATA:
			return {
				...state,
				loggedIn : true,
				token    : action?.payload?.token ?? state.token,
				userData : {
					...action.payload.data,
				},
			};
		case CLEAR_USER_DATA:
			return {};
		default:
			return state;
	}
};

export default authReducer;
