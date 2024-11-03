import { addUserActionType, removeUserActionType } from "./actionsTypes";

export const addUserActionCreator = (name, id) => {
    return {
        id,
        name,
        type: addUserActionType
    }
}

export const removeUserActionCreator = (id) => {
    return {
        id,
        type: removeUserActionType
    }
}