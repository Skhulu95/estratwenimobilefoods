/*eslint-disable*/

import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import './App.css';
import './store.js';
import './styles.css';
import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFoundPage from "./components/pages/404";
import Main from './components/pages/Main';
import Store from './components/pages/Store';
import Navigation from "./components/Navigation";
import Team from "./components/pages/Team";


class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Main} />
						<Route exact path="/about" component={About} />
						<Route exact path="/team" component={Team} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/store" component={Store} />
						<Route exact path="/404" component={NotFoundPage} />
						<Redirect to="/404" />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	};
};


export default App;