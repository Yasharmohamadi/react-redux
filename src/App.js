import React from "react";

export default function App() {
	return (
		<div class="container m-auto flex flex-col items-center justify-center">
			<h2 class="text-xl mt-8 mb-4 text-[#5f9ea0]">Todo Project</h2>
			<div class="flex items-center justify-center flex-row gap-4">
				<div class="bg-[#5f9ea0] overflow-hidden rounded-lg p-0.5">
					<input
						class="bg-[#5f9ea0] text-black placeholder:text-gray-700 px-2 py-1 border-none outline-none"
						placeholder="add new todo ..."
					/>
					<button class="rounded-lg px-2 py-1 hover:bg-black hover:text-[#5f9ea0] border-black border-2">
						ADD
					</button>
				</div>
				<select class="bg-[#5f9ea0] px-2.5 py-1.5 rounded-lg border-none outline-none cursor-pointer">
					<option value="all">all</option>
					<option value="completed">completed</option>
					<option value="uncompleted">uncompleted</option>
				</select>
			</div>
			<div class="flex flex-col items-center justify-center mt-4 w-96 gap-2">
				<div class="flex items-center justify-between bg-[#5f9ea0] w-full rounded-lg px-2.5 py-1.5">
					<span class="">learn js</span>
					<div class="flex gap-1">
						<button class="rounded-lg px-2 py-1 hover:bg-black hover:text-[#5f9ea0] border-black border-2">COMPLETE</button>
						<button class="rounded-lg px-2 py-1 hover:bg-black hover:text-[#5f9ea0] border-black border-2">DELETE</button>
					</div>
				</div>

			</div>
		</div>
	);
}
