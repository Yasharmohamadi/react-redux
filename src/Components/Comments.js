import React from "react";
import { connect } from "react-redux";

function Comments(props) {
	console.log(props);
	return (
		<div className="text-[#5f9ea0] p-4">
		<h1 className="text-xl">Comments</h1>
		<ul className="list-disc pl-4">
			{props.comments.map((comments) => (
				<li key={comments.id} className="text-sm">
					{comments.title}
				</li>
			))}
		</ul>
	</div>
	);
}
function mapStateToProps(state) {
	return { comments: state.Comments };
}

export default connect(mapStateToProps)(Comments);
