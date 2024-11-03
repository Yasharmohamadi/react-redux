
import { addUserActionType, removeUserActionType } from "./actionsTypes";

export default function Reducer(state = [], action) {
	switch (action.type) {
		case addUserActionType: {
            let newUser= {
                id: action.id,
                name: action.name
            }
			return [...state, newUser];
		}

		case removeUserActionType: {
            let filteredState = [...state].filter(user => user.id !== action.id)
			return filteredState;
		}
		default: {
			return state;
		}
	}
}
