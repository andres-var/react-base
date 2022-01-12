import { useEffect, useState } from "react";

// Import Own Components
import {
	instanceAxios,
	fetchClient,
	isValidArray,
} from "Helpers";
import GenericActions from "../Actions/GenericActions";


// import ClientsActions from "../Actions/ClientsActions";

export const getAll = (type, query) => (dispatch, getState) => {
	const [data, setData]       = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError]     = useState(false);
	const source = instanceAxios.CancelToken.source();

	const fetchData = async () => {

		try {
			// const { _authReducer : { token } } = getState();

			const response = await instanceAxios({
				method      : "GET",
				url         : type,
				params      : query,
				cancelToken : source.token,
			});

			const docs = response.data.data;
			const page = response.data.page;
			const total = response.data.total;


			if (isValidArray(docs)) {
				setData(docs);
				dispatch(GenericActions.getAll(docs, page, total, type));
			} else {
				setData([]);
				dispatch(GenericActions.getAll([], 0, 0, type));
			}

			setLoading(false);
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
	}, [type]);

	return { data, loading, error };
};

const get = (_id, type) => async (dispatch, getState) => {
	try {
		const { _authReducer : { token } } = getState();

		const response = await fetchClient(`/${type}/${_id}`, { token } );

		const {
			data,
		} = await response.json();

		if (!data) {
			return response;
		}

		dispatch(GenericActions.get(data, type));

		return response;
	} catch (err) {
		console.error("error", err);
		return err;
	}

};

const remove = (id, type) => async (dispatch, getState) => {
	try {
		const { _authReducer : { token } } = getState();

		const response = await fetchClient(`/${type}/${id}`, { token, method : "DELETE" } );

		if (response.status === 200) {
			dispatch(GenericActions.remove(id, type));
		}

		return response;
	} catch (err) {
		console.error("error", err);
		return;
	}

};

const add = (data = {}, type) => async (dispatch, getState) => {
	try {
		const { _authReducer : { token } } = getState();

		const body = new FormData();

		for (const item in data) {
			body.append(item, data[item]);
		}

		const response = await fetchClient(`/${type}`, { token, method : "POST", body } );

		if (response.status === 200) {
			const {data} = await response.json();
			dispatch(GenericActions.add(data, type));
		}
		return response;
	} catch (err) {
		console.error("error", err);
		return err;
	}
};

const update = (_id, data = {}, type) => async (dispatch, getState) => {
	try {
		const { _authReducer : { token } } = getState();

		const body = new FormData();

		for (const item in data) {
			body.append(item, data[item]);
		}

		const response = await fetchClient(`/${type}/${_id}`, { token, method : "PUT", body } );
		if (response.status === 200) {
			const {data} = await response.json();
			dispatch(GenericActions.update(data, _id, type));
		}
		return response;
	} catch (err) {
		console.error("error", err);
		return err;
	}
};

const GenericService = {
	add,
	get,
	getAll,
	update,
	remove,
};

export default GenericService;
