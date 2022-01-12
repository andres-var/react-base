import { Store } from "Store";
// import apiUrl      from "./apiUrl";
import axios       from "axios";
import AuthActions from "Store/Actions/AuthActions";


/**
 * Cliente es un middleware que valida el token y te hace una peticion a la api rest
 * @author Andres Vargas <andres.campo92@gmail.com>
 */

const instanceAxios = axios.create({
	baseURL : "https://reqres.in/api/",
	timeout : 10000,
	headers : {
		"Content-Type" : "application/json",
		"Accept"       : "application/json",
	},
});

const responseSuccessHandler = response =>  response;

const responseErrorHandler = error => {
	if (error.response?.status === 401) {
		Store.dispatch(AuthActions.clearUserData());
		return Promise.reject(error);
	}
	return Promise.reject(error);
};

instanceAxios.interceptors.response.use(
	response => responseSuccessHandler(response),
	error => responseErrorHandler(error)
);

instanceAxios.CancelToken = axios.CancelToken;
instanceAxios.isCancel = axios.isCancel;

export default instanceAxios;
