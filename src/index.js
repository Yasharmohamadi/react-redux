import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// import redux
import { legacy_createStore } from "redux";
// import component
import Counter from "./Components/Counter";
// -------- COUNTER STORE ---------
// Impoer Counter Reducer
import CounterReducer from "./Redux/Stores/Counter";
import {
	incrementActionCreator,
	decrementActionCreator,
	resetActionCreator,
} from "./Redux/Stores/Counter";
// Create a store for Counter
const CounterStore = legacy_createStore(CounterReducer);
// Get root element from DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
// a arrow function for rendering
const render = () =>
	root.render(
		<React.StrictMode>
			<Counter
				counter={CounterStore.getState()}
				onReset={() => CounterStore.dispatch(resetActionCreator())}
				onIncrement={() => CounterStore.dispatch(incrementActionCreator())}
				onDecrement={() => CounterStore.dispatch(decrementActionCreator())}
			/>
			<App />
		</React.StrictMode>
	);
// run render arrow function
render();
// subscribing render function for stay update DOM
CounterStore.subscribe(render);
// if we want to stop subscribing
// const unsubscribe = CounterStore.subscribe(render);
// unsubscribe() // stop subscribing
