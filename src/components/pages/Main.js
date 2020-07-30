import React from "react";
import { Switch, Route, Router } from "react-router-dom";
// Pages
import Menu from "../pages/Menu";
import About from "../pages/About";
import Navbar from "../layout/Navbar";

const Main = () => {
	return (
		<Router>
			<Switch>
				{/* The Switch decides which component to show based on the current URL.*/}
				<Route exact path="/" component={Navbar} />
				<Route exact path="/about" component={About} />
				<Route exact path="/menu" component={Menu} />
			</Switch>
		</Router>
	);
};

export default Main;
