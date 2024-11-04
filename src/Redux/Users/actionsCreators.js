import {
	addUserActionType,
	removeUserActionType,
	getUsersActionTypeStart,
	getUsersActionTypeSuccess,
	getUsersActionTypeError,
} from "./actionsTypes";

export const addUserActionCreator = (id, name) => {
	return {
		id,
		name,
		type: addUserActionType,
	};
};

export const removeUserActionCreator = (id) => {
	return {
		id,
		type: removeUserActionType,
	};
};

export const getUsersActionCreatorStart = (url) => {
	return {
		type: getUsersActionTypeStart,
		url,
	};
};
export const getUsersActionCreatorSuccess = (data) => {
	return {
		type: getUsersActionTypeSuccess,
		data,
	};
};
export const getUsersActionCreatorError = (error) => {
	return {
		type: getUsersActionTypeError,
		error,
	};
};
