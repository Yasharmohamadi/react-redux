import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// Import Redux modules
import { legacy_createStore } from "redux";

// Impoer Counter Reducer
import CounterReducer from "./Redux/Stores/Counter";

// Import Counter Action Reducer
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
			<App
				counter={CounterStore.getState()}
				onReset={() => CounterStore.dispatch(resetActionCreator())}
				onIncrement={() => CounterStore.dispatch(incrementActionCreator())}
				onDecrement={() => CounterStore.dispatch(decrementActionCreator())}
			/>
		</React.StrictMode>
	);

// run render arrow function
render();

// subscribing render function for stay update DOM
CounterStore.subscribe(render);

// if we want to stop subscribing
// const unsubscribe = CounterStore.subscribe(render);
// unsubscribe() // stop subscribing
