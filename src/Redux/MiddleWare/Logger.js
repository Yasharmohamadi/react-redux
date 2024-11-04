// export const Logger = ({getState, dispatch}) => (next) => (action) => {
export const Logger = (params) => (storage) => (next) => (action) => {
    console.log('Params: ', params);
	// console.log("storage: ", storage);
	// console.log("next: ", next);
	// console.log("action: ", action);
	next(action); // go to next middleware if dousn't exist, go to reducer
};
