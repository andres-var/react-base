import qs from "qs";

// Import Own Components
import {
	fetchClient,
	isValidArray,
} from "Helpers";
import GenericActions from "../Actions/GenericActions";

// import ClientsActions from "../Actions/ClientsActions";

const getAll = (type, query) => async (dispatch, getState) => {
	try {
		const { _authReducer : { token } } = getState();

		const response = await fetchClient(`/${type}?${qs.stringify(query)}`, { token } );

		const {
			docs,
			page,
			totalPages,
		} = await response.json();

		if (isValidArray(docs)) {
			dispatch(GenericActions.getAll(docs, page, totalPages, type));
		} else {
			dispatch(GenericActions.getAll([], 0, 0, type));
		}
		return response;
	} catch (err) {
		console.error("error", err);
	}
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
