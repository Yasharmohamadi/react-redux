import React from "react";
import { connect } from "react-redux";
import { addCourseActionCreator } from "../Redux/Stores/Courses";

function Courses(props) {
	return (
		<div className="text-[#5f9ea0] p-4">
			<h1 className="text-xl">Courses</h1>
			<button className="btn text-black text-sm" onClick={props.addNewCourse}>
				Add New Course
			</button>
			<ul className="list-disc pl-4">
				{props.course.map((course) => (
					<li key={course.id} className="text-sm">
						{course.title}
					</li>
				))}
			</ul>
		</div>
	);
}

function mapStateToProps(state) {
	return { course: state.Courses };
}

function mapDispatchToProps(dispatch) {
	return {
		addNewCourse: () => dispatch(addCourseActionCreator(5, "Tailwind")),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
