import { getUsersActionCreatorSuccess } from "../Users/actionsCreators";
import { getUsersActionTypeStart } from "../Users/actionsTypes";

export const ApiCall = ({ dispatch }) => (next) => (action) => {
	if (action.type !== getUsersActionTypeStart) {
		return next(action);
	}

	fetch(action.url)
		.then((response) => response.json())
		.then((data) => dispatch(getUsersActionCreatorSuccess(data)));
};
