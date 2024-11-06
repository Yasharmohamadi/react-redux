import React from "react";
import { connect } from "react-redux";

function Users(props) {
	return (
		<div className="text-[#5f9ea0] p-4">
			<h1 className="text-xl">Users</h1>
			<ul className="list-disc pl-4">
				{props.users.map((user) => (
					<li key={user.id} className="text-sm">
						{user.name}
					</li>
				))}
			</ul>
		</div>
	);
}

function mapStateToProps(state) {
	return { users: state.Users };
}

export default connect(mapStateToProps)(Users);
