// Actions
const addCommentActionType = "ADD_COMMENT";
const removeCommentActionType = "REMOVE_COMMENT";

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
