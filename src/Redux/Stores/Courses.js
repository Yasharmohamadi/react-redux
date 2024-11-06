// Actions
const addCourseActionType = "ADD_COURSE";
const removeCourseActionType = "REMOVE_COURSE";

// Reducer
export default function Reducer(state = [], action) {
	switch (action.type) {
		case addCourseActionType: {
			let newCourse = {
				id: action.id,
				title: action.title,
			};
			return [...state, newCourse];
		}

		case removeCourseActionType: {
			let filteredState = [...state].filter(
				(course) => course.id !== action.id
			);
			return filteredState;
		}
		default: {
			return state;
		}
	}
}

// Actions Creators
export const addCourseActionCreator = (id, title) => {
	return {
		id,
		title,
		type: addCourseActionType,
	};
};

export const removeCourseActionCreator = (id) => {
	return {
		id,
		type: removeCourseActionType,
	};
};
