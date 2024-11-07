import React from "react";
import { connect } from "react-redux";
import { addCommentActionCreator } from "../Redux/Stores/Comments";

function Comments(props) {
	console.log(props);
	return (
		<div className="text-[#5f9ea0] p-4">
			<h1 className="text-xl">Comments</h1>
			<button className="btn text-black text-sm" onClick={props.addNewComment}>
				Add New Comment
			</button>
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

function mapDispatchToProps(dispatch) {
	return {
		addNewComment: () => dispatch(addCommentActionCreator(5, "Jack", "")),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
