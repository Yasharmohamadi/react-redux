import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
	name: "Courses",
	initialState: [],
	reducers: {
		addCourseAct(state, action) {
			state.push(action.payload);
		},
		removeCourseAct(state, action) {
			state.filter((course) => course.id !== action.payload.id);
		},
	},
});

export default slice.reducer;
export const { addCourseAct, removeCourseAct } = slice.actions;
