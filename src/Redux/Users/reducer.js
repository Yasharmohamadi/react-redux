import {
	addUserActionType,
	removeUserActionType,
	getUsersActionTypeSuccess,
	getUsersActionTypeError,
} from "./actionsTypes";

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
