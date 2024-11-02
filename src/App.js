import React, { useState } from "react";

export default function App({counter , onIncrement, onDecrement, onReset}) {
	return (
		<div class="container m-auto flex flex-col items-center justify-center">
			<h2 class="text-xl mt-8 mb-4 text-[#5f9ea0]">Counter Project</h2>
			<div class="">
				<h1 class="text-4xl mb-2 text-[#5f9ea0] text-center">{counter}</h1>
				<button class="btn" id="decrement" onClick={onDecrement}>
					decrement
				</button>
				<button class="btn" id="reset" onClick={onReset} >
					reset
				</button>
				<button class="btn" id="increment" onClick={onIncrement}>
					increment
				</button>
			</div>
		</div>
	);
}
