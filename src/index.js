import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import "./components/pages/Log";
import Log from "./components/pages/Log";
import {  Route, Switch } from "react-router-dom";



ReactDOM.render(
	<BrowserRouter>
		<App /> {/* The various pages will be displayed by the `Main` component. */}
		
			<Switch>
				<Route path="/Log" component={Log} />
			</Switch>
		
	</BrowserRouter>,
	document.getElementById("root")
);

