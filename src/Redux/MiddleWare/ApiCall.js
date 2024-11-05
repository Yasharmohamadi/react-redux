import {
	getUsersActionCreatorSuccess,
	getUsersActionCreatorError,
	getUsersActionTypeStart,
} from "../Stores/Users";


export const ApiCall = ({ dispatch }) => (next) => (action) => {
	if (action.type !== getUsersActionTypeStart) {
		return next(action);
	}

	fetch(action.url)
		.then((response) => response.json())
		.then((data) => dispatch(getUsersActionCreatorSuccess(data)))
		.catch((error) => dispatch(getUsersActionCreatorError(error)));
};
