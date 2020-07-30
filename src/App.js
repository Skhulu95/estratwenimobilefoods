/*eslint-disable*/

import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom";
import './App.css';
import './js/store.js';
import './styles.css';
import Navbar from './components/layout/Navbar';
import Header from "./components/pages/Header";
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import NotFoundPage from "./components/pages/404";
import Store from './components/pages/Store';
import Team from "./components/pages/Team";
import Reviews from "./components/pages/Reviews";


class App extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Header} />
						<Route exact path="/about" component={About} />
						<Route exact path="/reviews" component={Reviews} />
						<Route exact path="/team" component={Team} />
						<Route exact path="/contact" component={Contact} />
						<Route exact path="/store" component={Store} />
						<Route component={NotFoundPage} />
					</Switch>
					
					<Footer />
				</div>
			</Router>
		);
	};
};


export default App;