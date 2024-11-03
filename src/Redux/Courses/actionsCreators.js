import { addCourseActionType, removeCourseActionType } from "./actionsTypes";

export const addCourseActionCreator = (title, id) => {
    return {
        id,
        title,
        type: addCourseActionType
    }
}

export const removeCourseActionCreator = (id) => {
    return {
        id,
        type: removeCourseActionType
    }
}