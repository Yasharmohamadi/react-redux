import React from "react";
import { connect } from "react-redux";

function Courses(props) {
	console.log(props.course);
	return (
		<div className="text-[#5f9ea0] p-4">
			<h1 className="text-xl">Courses</h1>
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

export default connect(mapStateToProps)(Courses);
