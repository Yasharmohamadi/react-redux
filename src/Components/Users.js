import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserAct } from "../Redux/Stores/Users";

export default function Users() {
	const users = useSelector((state) => state.Users); // mapStateToProps
	const dispatch = useDispatch(); // mapDispatchToProps

	const addNewUser = () => {
		dispatch(addUserAct({ id: Math.floor(Math.random() * 1000), name: "Eshi" }));
	};

	return (
		<div className="text-[#5f9ea0] p-4">
			<h1 className="text-xl">Users</h1>
			<button className="btn text-black text-sm" onClick={addNewUser}>
				Add New User
			</button>
			<ul className="list-disc pl-4">
				{users.map((user) => (
					<li key={user.id} className="text-sm">
						{user.name}
					</li>
				))}
			</ul>
		</div>
	);
}
