import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { store } from "./Redux/store";
import {
	incrementActionCreator,
	decrementActionCreator,
  resetActionCreator
} from "./Redux/actionCreators";

const root = ReactDOM.createRoot(document.getElementById("root"));
const render = () =>
	root.render(
		<React.StrictMode>
			<App
				counter={store.getState()}
				onReset={() => store.dispatch(resetActionCreator())}
				onIncrement={() => store.dispatch(incrementActionCreator())}
				onDecrement={() => store.dispatch(decrementActionCreator())}
			/>
		</React.StrictMode>
	);

render();

const unsubscribe = store.subscribe(render);
// unsubscribe() // stop subscribing
