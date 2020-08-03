import React, { Fragment } from 'react';
import './App.css';
import './js/store.js';
import './styles.css';
import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Store from './components/pages/Store';
import Team from "./components/pages/Team";
import Reviews from "./components/pages/Reviews";



class App extends React.Component {
	render() {
		return (
			<div className="App">
				<Fragment>
					<Navbar />
					<About />
					<Reviews />
					<Team />
					<Contact />
					<Store />
					<Footer />
				</Fragment>
			</div>
		);
	};
};


export default App;