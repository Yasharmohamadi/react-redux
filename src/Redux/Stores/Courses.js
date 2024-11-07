import { createAction, createReducer } from "@reduxjs/toolkit";

export const addCourseAct = createAction("ADD_COURSE");
export const removeCourseAct = createAction("REMOVE_COURSE");

// Reducer
export default createReducer([], (builder) => {
	builder.addCase(addCourseAct, (state, action) => {
		state.push(action.payload);
	});
	builder.addCase(removeCourseAct, (state, action) => {
		state.filter((course) => course.id !== action.payload.id);
	});
});