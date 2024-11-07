import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserActionCreator } from "../Redux/Stores/Users";

export default function Users() {
	const state = useSelector()
	const dispatch = useDispatch();

	const addNewUser = () => {
		dispatch(addUserActionCreator(5, "Eshi"));
	};
	return (
		<div className="text-[#5f9ea0] p-4">
			<h1 className="text-xl">Users</h1>
			<button className="btn text-black text-sm" onClick={addNewUser}>
				Add New User
			</button>
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
