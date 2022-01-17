import { useEffect, useState } from "react";

// Import Own Components
import {
	instanceAxios,
	isValidArray,
} from "Helpers";
import GenericActions from "../Actions/GenericActions";


export const FetchHook = ({
	query,
	module,
	method = "GET",
	dataToSend = undefined,
}) => (dispatch, getState) => {

	const [data, setData]       = useState(false);
	const [status, setStatus]       = useState(false);
	const [loading, setLoading] = useState(false);
	const [error, setError]     = useState(false);
	const source = instanceAxios.CancelToken.source();

	const fetchData = async () => {
		try {
			setLoading(true);
			const { _authReducer : { token } } = getState();

			const body = buildFormData(dataToSend);

			const response = await instanceAxios({
				method,
				url         : module,
				data        : body,
				params      : query,
				cancelToken : source.token,
				headers     : {
					Authorization : `Bearer ${token}`,
				},
			});

			const { data : { data }, status } = response;

			setLoading(false);
			setStatus(status);

			if (status !== 200 && status !== 201 && status !== 204) {
				setError(true);
				return;
			}

			const actionType = method === "DELETE" ? "remove" : method.toLowerCase();


			setData(data);
			dispatch(GenericActions[actionType](data, module.split("/")[0]));
			setError(false);

		} catch (err) {
			setLoading(false);
			setError(true);
			console.error("error", err);
		}
	};

	useEffect(() => {
		fetchData();
		return () => source.cancel("Operation canceled by the user.");
	}, [module]);

	return { data, loading, error, status };
};


export default FetchHook;


const buildFormData = (data = null) => {
	const body = new FormData();

	if (!data) return body;

	for (const item in data) {
		if (isValidArray(data[item])) {
			data[item].forEach(element => {
				if (element) {
					body.append(`${item}[]`, JSON.stringify(element));
					if (element?.image) body.delete("image");
				}
			});
		} else if (typeof data[item] === "object") {
			body.append(item, JSON.stringify(data[item]));
			if (data[item] instanceof File) body.append("file", data[item]);
			if (data[item] instanceof Date ) {
				body.delete(item);
				body.append(item,  data[item]);
			}
		} else {
			body.append(item, data[item]);
		}
	}

	return body;
};
