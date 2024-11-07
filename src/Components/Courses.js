import React from "react";
import { addCourseAct } from "../Redux/Stores/Courses";
import { useDispatch, useSelector } from "react-redux";

export default function Courses(props) {
	const dispatch = useDispatch();
	const courses = useSelector((state) => state.Courses);

	const addNewCourse = () => {
		dispatch(addCourseAct({ id: Math.floor(Math.random() * 1000), title: "Redux" }));
	};
	return (
		<div className="text-[#5f9ea0] p-4">
			<h1 className="text-xl">Courses</h1>
			<button className="btn text-black text-sm" onClick={addNewCourse}>
				Add New Course
			</button>
			<ul className="list-disc pl-4">
				{courses.map((course) => (
					<li key={course.id} className="text-sm">
						{course.title}
					</li>
				))}
			</ul>
		</div>
	);
}
