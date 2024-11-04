// Actions
export const addUserActionType = "ADD_USER";
export const removeUserActionType = "REMOVE_USER";
export const getUsersActionTypeStart = "GET_USERS_START";
export const getUsersActionTypeSuccess = "GET_USERS_SUCCESS";
export const getUsersActionTypeError = "GET_USERS_ERROR";

// Reducer
export default function Reducer(state = [], action) {
	switch (action.type) {
		case addUserActionType: {
			let newUser = {
				id: action.id,
				name: action.name,
			};
			return [...state, newUser];
		}

		case removeUserActionType: {
			let filteredState = [...state].filter((user) => user.id !== action.id);
			return filteredState;
		}
		case getUsersActionTypeSuccess: {
			return [...state, ...action.data];
		}
		case getUsersActionTypeError: {
			return [...state, { error: action.error }];
		}
		default: {
			return state;
		}
	}
}

// Actions Creators
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
