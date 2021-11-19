const getAll = (data = [], page = 1, totalPages = 1, type) => ({
	type    : `GET_ALL_${type.toUpperCase()}`,
	payload : {
		data,
		page,
		totalPages,
	},
});

const get = (data, type) => ({
	type    : `GET_${type.toUpperCase()}`,
	payload : {
		data,
	},
});

const update = (data = {}, _id, type) => ({
	type    : `UPDATE_${type.toUpperCase()}`,
	payload : {
		data,
		_id,
	},
});

const add = (data, type) => ({
	type    : `ADD_${type.toUpperCase()}`,
	payload : {
		data,
	},
});

const remove = (_id, type) => ({
	type    : `REMOVE_${type.toUpperCase()}`,
	payload : {
		_id,
	},
});

const clear = (_id, type) => ({
	type : `CLEAR_${type.toUpperCase()}`,
});


const GenericActions = {
	add,
	get,
	clear,
	getAll,
	remove,
	update,
};

export default GenericActions;
