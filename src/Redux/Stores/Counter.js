// Actions
const counterIncrement = "INCREMENT";
const counterDecrement = "DECREMENT";
const counterReset = "RESET";

// Reducer
export default function reducer(state = 0, action) {
	switch (action.type) {
		case counterIncrement: {
			return state + 1;
		}
		case counterReset: {
			return 0;
		}
		case counterDecrement: {
			return state - 1;
		}
		default: {
			return state;
		}
	}
}

// Action Creators
export const incrementActionCreator = () => {
	return { type: counterIncrement };
};
export const decrementActionCreator = () => {
	return { type: counterDecrement };
};
export const resetActionCreator = () => {
	return { type: counterReset };
};
