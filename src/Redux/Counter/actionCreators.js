import { counterDecrement, counterIncrement, counterReset } from "./actionType";

export const incrementActionCreator = () => {
	return { type: counterIncrement };
};
export const decrementActionCreator = () => {
	return { type: counterDecrement };
};
export const resetActionCreator = () => {
	return { type: counterReset };
};
