import {
	addCourseActionType,
	removeCourseActionType,
} from "./actionsTypes";

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
