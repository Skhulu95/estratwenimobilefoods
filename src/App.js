import React, {Fragment} from "react";
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
} from "react-router-dom";

class App extends React.Component {
	render() {
		return (
			<div className="App">
				<div>
					<div className="App">
						<Fragment>
							<Router>
								<Switch>
									<Route path="/Log" component={Log} />
								</Switch>
							</Router>
							<Header />
							<Navbar />
							<About />
							<Reviews />
							<Team />
							<Contact />
							<Store />

							<Footer />
						</Fragment>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
