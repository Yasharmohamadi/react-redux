import React from "react";
import { combineReducers, legacy_createStore } from "redux";
// add reducers
import UserReducer from "./Redux/Users/reducer";
import CourseReducer from "./Redux/Courses/reducer";
import CommentReducer from "./Redux/Comments/reducer";
// add actions creators
import {
	addUserActionCreator,
	removeUserActionCreator,
} from "./Redux/Users/actionsCreators";
import {
	addCourseActionCreator,
	removeCourseActionCreator,
} from "./Redux/Courses/actionsCreators";
import {
	addCommentActionCreator,
	removeCommentActionCreator,
} from "./Redux/Comments/actionsCreators";

export default function App({ counter, onIncrement, onDecrement, onReset }) {


	return (
		<div className="container m-auto flex flex-col items-center justify-center">
			<h2 className="text-xl mt-8 mb-4 text-[#5f9ea0]">Counter Project</h2>
			<div className="">
				<h1 className="text-4xl mb-2 text-[#5f9ea0] text-center">{counter}</h1>
				<button className="btn" id="decrement" onClick={onDecrement}>
					decrement
				</button>
				<button className="btn" id="reset" onClick={onReset}>
					reset
				</button>
				<button className="btn" id="increment" onClick={onIncrement}>
					increment
				</button>
			</div>
		</div>
	);
}
