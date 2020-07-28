import React from 'react';
// import { Link } from 'react-router-dom';
import About from './About';
import Reviews from "./Reviews";
import Team from "./Team";
import Contact from "./Contact";

const MainPage = () => {
    return (
			<div>
				<About />
				<Reviews />
				<Team />
				<Contact />
			</div>
		);
};

export default MainPage;