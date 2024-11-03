export const Logger = (storage) => (next) => (action) => {
	console.log("storage: ", storage);
	console.log("next: ", next);
	console.log("action: ", action);
	next(action); // go to next middleware if dousn't exist, go to reducer
};
