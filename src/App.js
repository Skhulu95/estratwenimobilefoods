/*eslint-disable*/

import React, { Fragment } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import SpecialItem from './components/pages/SpecialItems';
import Menu from './components/pages/Menu';
import About from './components/pages/About';
import Reviews from './components/pages/Reviews';
import Team from "./components/pages/Team";
import Contact from "./components/pages/Contact";
import Footer from "./components/layout/Footer";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Fragment>
					<Navbar />
					<SpecialItem />
					<Menu />
					<About />
					<Reviews />
					<Team />
					<Contact />
					<Footer />
				</Fragment>
			</div>
		);
	};
};
				

export default App;