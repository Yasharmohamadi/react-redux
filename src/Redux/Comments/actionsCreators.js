import { addCommentActionType, removeCommentActionType } from "./actionsTypes";

export const addCommentActionCreator = (id ,title, body) => {
    return {
        id,
        title,
        body,
        type: addCommentActionType
    }
}

export const removeCommentActionCreator = (id) => {
    return {
        id,
        type: removeCommentActionType
    }
}