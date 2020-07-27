/*eslint-disable*/

import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/Navbar';
import About from './components/pages/About';
import Reviews from './components/pages/Reviews';
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";
import Menu from './components/pages/Menu';
import Cart from "./components/pages/Cart";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Fragment>
						<Navbar />
						<Menu />
						
						<Cart />
						<About />
						<Reviews />
						<Team />
						<Contact />
						<Footer />
					</Fragment>
				</div>
			</BrowserRouter>
		);
	};
};


export default App;