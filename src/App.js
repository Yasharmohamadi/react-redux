import React from "react";
// import components
import Users from "./Components/Users";
import Courses from "./Components/Courses";
// add reducers
import UserReducer from "./Redux/Stores/Users";
import CourseReducer from "./Redux/Stores/Courses"; // add actions creators
// -------- USERS STORE ---------
import {
	addUserAct,
	// removeUserAct,
	getUsersActStart,
} from "./Redux/Stores/Users";
import { addCourseAct, removeCourseAct } from "./Redux/Stores/Courses";
// import middle wares
import { ApiCall } from "./Redux/MiddleWare/ApiCall";

// import react-redux provider
import { Provider } from "react-redux";
// imports from toolkit
import { Tuple, configureStore } from "@reduxjs/toolkit";
export default function App() {
	const store = configureStore({
		reducer: {
			Users: UserReducer,
			Courses: CourseReducer,
		},
		devTools: false, // default true
		middleware: () => new Tuple(ApiCall),
	});

	// store.subscribe(() => console.log(store.getState()));
	store.dispatch(
		addUserAct({ id: Math.floor(Math.random() * 1000), name: "Yashar" })
	);


	store.dispatch(
		addCourseAct({ id: Math.floor(Math.random() * 1000), title: "JavaScript" })
	);


	// store.dispatch(
	// 	getUsersActStart({ url: "https://jsonplaceholder.typicode.com/users" })
	// );

	return (
		<Provider store={store}>
			<div className="container m-auto mt-8 flex justify-center">
				<Users />
				<Courses />
			</div>
		</Provider>
	);
}
