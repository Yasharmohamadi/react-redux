import { createAction, createReducer } from "@reduxjs/toolkit";

// actions
export const addUserAct = createAction("ADD_USER");
export const removeUserAct = createAction("REMOVE_USER");
export const getUsersActStart = createAction("GET_USERS_START");
export const getUsersActSuccess = createAction("GET_USERS_SUCCESS");
export const getUsersActError = createAction("GET_USERS_ERROR");

// reducer
export default createReducer([], (builder) => {
	builder.addCase(addUserAct, (state, action) => {
		state.push(action.payload);
	});
	builder.addCase(removeUserAct, (state, action) => {
		state.filter((user) => user.id !== action.payload.id);

	});
	builder.addCase(getUsersActSuccess, (state, action) => {
		state.push(...action.payload.data);
	});
	builder.addCase(getUsersActError, (state, action) => {
		state.push({ error: action.payload.error });
	});
});
