/*eslint-disable*/

import React, { Fragment, Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/layout/Navbar';
// import SpecialItem from './components/pages/SpecialItems';
// import Menu from './components/pages/Menu1';
import About from './components/pages/About';
import Reviews from './components/pages/Reviews';
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";
// import SpecialItems from './components/pages/SpecialItems';
import Menu from './components/pages/Menu';
import Cart from "./components/pages/Menu";

class App extends React.Component {
	render() {
		return (
			<BrowserRouter>
				<div className="App">
					<Fragment>
						<Navbar />
						{/* <MainMenu /> */}
						<Switch>
							<Route exact path="/" component={Menu} />
							<Route path="#cart" component={Cart} />
						</Switch>
						{/* <SpecialItems /> */}
						{/* <Menu /> */}
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