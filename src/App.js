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
import MainPage from './components/pages/';
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
						<Route exact path="/" component={MainPage} />
						<Route path="/about" component={About} />
						<Route path="/team" component={Team} />
						<Route path="/contact" component={Contact} />
						<Route path="/store" component={Store} />
						<Route path="/404" component={NotFoundPage} />
						<Redirect to="/404" />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	};
};


export default App;