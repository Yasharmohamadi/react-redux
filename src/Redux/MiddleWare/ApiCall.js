import { getUsersActStart,getUsersActSuccess, getUsersActError } from "../Stores/Users";

export const ApiCall = ({ dispatch }) => (next) => (action) => {
	// console.log(action);
	if (action.type !== getUsersActStart.type) {
		
		return next(action);
	}

	fetch(action.payload.url)
		.then((response) => response.json())
		.then((data) => dispatch(getUsersActSuccess({data})))
		.catch((error) => dispatch(getUsersActError({error})));
};
