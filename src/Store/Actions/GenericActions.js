import { isValidArray } from "Helpers";


const get = (data, module) => {

	if (isValidArray(data)) {
		return {
			type    : `GET_ALL_${module.toUpperCase()}`,
			payload : {
				data       : data?.docs,
				page       : data?.page,
				totalPages : data?.total,
			},
		};
	}

	return {
		type    : `GET_${module.toUpperCase()}`,
		payload : {
			data,
		},
	};
};

const put = (data = {}, module) => ({
	type    : `UPDATE_${module.toUpperCase()}`,
	payload : {
		data,
		_id : data?._id,
	},
});

const post = (data, module) => ({
	type    : `ADD_${module.toUpperCase()}`,
	payload : {
		data,
	},
});

const remove = (data = {}, module) => ({
	type    : `REMOVE_${module.toUpperCase()}`,
	payload : {
		data : data?._id,
	},
});

const clear = (_id, module) => ({
	type : `CLEAR_${module.toUpperCase()}`,
});


const GenericActions = {
	get,
	put,
	post,
	clear,
	remove,
};

export default GenericActions;
