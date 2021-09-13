/* eslint-disable no-async-promise-executor */
import AuthActions from "Store/Actions/AuthActions";
import { Store }   from "Store";
import apiUrl      from "./apiUrl";


/**
 * Cliente es un middleware que valida el token y te hace una peticion a la api rest
 * @author Andres Vargas <andres.campo92@gmail.com>
 */

const fetchClient = (url, options) => new Promise( async (resolve, reject) => {
	try {
		const { token, ...restOfOptions } = options;

		const response = await fetch(apiUrl + url, {
			method : "GET",
			...restOfOptions,
			...( token ? {
				headers : {
					"Authorization" : `Bearer ${token}`,
				},
			} : {} ),
		});

		if(response.status === 401){
			Store.dispatch(AuthActions.clearUserData());
			reject();
		}

		return resolve(response);
	} catch (error) {
		console.log("[Client.js] ", error);
		reject();
	}
});

export default fetchClient;

