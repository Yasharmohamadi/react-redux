import { createAction } from "@reduxjs/toolkit";

export const addCourseAct = createAction("ADD_COURSE")
export const removeCourseAct = createAction("REMOVE_COURSE")

// Reducer
export default function Reducer(state = [], action) {
	switch (action.type) {
		case addCourseAct.type: {
			let newCourse = {
				id: action.payload.id,
				title: action.payload.title,
			};
			return [...state, newCourse];
		}

		case removeCourseAct.type: {
			let filteredState = [...state].filter(
				(course) => course.id !== action.payload.id
			);
			return filteredState;
		}
		default: {
			return state;
		}
	}
}