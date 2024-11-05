// Actions
const addCommentActionType = "ADD_COMMENT";
const removeCommentActionType = "REMOVE_COMMENT";
const getCommentsActionTypeStart = "GET_COMMENT_START";
const getCommentsActionTypeSuccess = "GET_COMMENT_START";
const getCommentsActionTypeError = "GET_COMMENT_START";

// Reducer
export default function Reducer(state = [], action) {
	switch (action.type) {
		case addCommentActionType: {
			let newComment = {
				id: action.id,
				tilte: action.title,
				body: action.body,
			};
			return [...state, newComment];
		}

		case removeCommentActionType: {
			let filteredState = [...state].filter(
				(course) => course.id !== action.id
			);
			return filteredState;
		}
		case getCommentsActionTypeSuccess: {
			return [...state, ...action.data];
		}
		case getCommentsActionTypeError: {
			return [...state, { error: action.error }];
		}
		default: {
			return state;
		}
	}
}
// Actions Creators
export const addCommentActionCreator = (id, title, body) => {
	return {
		id,
		title,
		body,
		type: addCommentActionType,
	};
};
export const removeCommentActionCreator = (id) => {
	return {
		id,
		type: removeCommentActionType,
	};
};
export const getCommentsActionCreatorStart = (url) => {
	return (dispatch) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => dispatch(getCommentsActionCreatorSuccess(data)))
			.catch((error) => dispatch(getCommentsActionCreatorError(error)));
	};
};
export const getCommentsActionCreatorSuccess = (data) => {
	return { type: getCommentsActionTypeSuccess, data };
};
export const getCommentsActionCreatorError = (error) => {
	return { type: getCommentsActionTypeError, error };
};
