import { addUserActionType, removeUserActionType } from "./actionsTypes";

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
