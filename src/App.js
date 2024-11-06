import React from "react";
// import components
import Users from "./Components/Users";
import Comments from "./Components/Comments";
import Courses from "./Components/Courses";
// Import redux
import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
// add reducers
import UserReducer from "./Redux/Stores/Users";
import CourseReducer from "./Redux/Stores/Courses";
import CommentReducer from "./Redux/Stores/Comments";
// add actions creators
// -------- USERS STORE ---------
import {
	addUserActionCreator,
	// removeUserActionCreator,
	getUsersActionCreatorStart,
} from "./Redux/Stores/Users";
// -------- COURSES STORE ---------
import {
	addCourseActionCreator,
	removeCourseActionCreator,
} from "./Redux/Stores/Courses";
// -------- COMMNETS STORE ---------
import {
	addCommentActionCreator,
	removeCommentActionCreator,
	getCommentsActionCreatorStart,
} from "./Redux/Stores/Comments";
// import middle wares
import { Logger } from "./Redux/MiddleWare/Logger";
import { ApiCall } from "./Redux/MiddleWare/ApiCall";
// import redux-thunk
import { thunk } from "redux-thunk";
// import redux-logger
import logger from "redux-logger";
// import redux-devtools
import { composeWithDevTools } from "@redux-devtools/extension";

export default function App() {
	const store = legacy_createStore(
		combineReducers({
			Users: UserReducer,
			Courses: CourseReducer,
			Comments: CommentReducer,
		}),
		// applyMiddleware(Logger("test params"), ApiCall, thunk),
		composeWithDevTools()
	);

	store.subscribe(() => console.log(store.getState()));
	// store.dispatch(addUserActionCreator(1, "Yashar"));
	// store.dispatch(addUserActionCreator(2, "Medi"));

	// this api request handle with thunk middleware
	// store.dispatch(getCommentsActionCreatorStart('https://jsonplaceholder.typicode.com/users'))
	// this api request handle with apicall middleware
	// store.dispatch(getUsersActionCreatorStart("https://jsonplaceholder.typicode.com/users"))
	return (
		<div className="container m-auto flex flex-col items-center justify-center">
			<Users />
			<Comments />
			<Courses />
		</div>
	);
}
