import { addCommentActionType, removeCommentActionType } from "./actionsTypes";

export default function Reducer(state = [], action) {
	switch (action.type) {
		case addCommentActionType: {
            let newComment= {
                id: action.id,
                tilte: action.title,
				body: action.body
            }
			return [...state, newComment];
		}

		case removeCommentActionType: {
            let filteredState = [...state].filter(course => course.id !== action.id)
			return filteredState;
		}
		default: {
			return state;
		}
	}
}
