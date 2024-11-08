import React from "react";
// import components
import Users from "./Components/Users";
import Courses from "./Components/Courses";
// add reducers
import UserReducer, { removeUserAct } from "./Redux/Stores/Users";
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
		devTools: true, // default true
		middleware: () => new Tuple(ApiCall),
	});

	// store.subscribe(() => console.log(store.getState()));
	store.dispatch(addUserAct({ id: 11, name: "Yashar" }));
	store.dispatch(removeUserAct({ id: 11}));

	store.dispatch(addCourseAct({ id: 1, title: "JavaScript" }));

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
