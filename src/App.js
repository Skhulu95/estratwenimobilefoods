import React, { Fragment } from "react";
import "./App.css";
import "./js/store.js";
import "./styles.css";
import Navbar from "./components/layout/Navbar";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Store from "./components/pages/Store";
import Team from "./components/pages/Team";
import Reviews from "./components/pages/Reviews";
import "./components/pages/Log";
import Log from "./components/pages/Log";

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div>
					<Router>
						<Header />
						<Switch>
							<Route exact path="/" component={Navbar} />
							<Route path="/Log" component={Log} />
							<Route path="/about" component={About} />
							<Route path="/reviews" component={Reviews} />
							<Route path="/team" component={Team} />
							<Route path="/contact" component={Contact} />
							<Route path="/store" component={Store} />
						</Switch>
						<Footer />
					</Router>
				</div>
			</div>
		);
	}
}

export default App;
