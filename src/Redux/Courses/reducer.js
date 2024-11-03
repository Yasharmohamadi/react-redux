import { addCourseActionType, removeCourseActionType } from "./actionsTypes";

export default function Reducer(state = [], action) {
	switch (action.type) {
		case addCourseActionType: {
            let newCourse= {
                id: action.id,
                tilte: action.title
            }
			return [...state, newCourse];
		}

		case removeCourseActionType: {
            let filteredState = [...state].filter(course => course.id !== action.id)
			return filteredState;
		}
		default: {
			return state;
		}
	}
}
