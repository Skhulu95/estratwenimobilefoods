import React from "react";

import { NavLink } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<NavLink to="/">Home</NavLink>
			<NavLink to="/about">About</NavLink>
			<NavLink to="/contact">Contact</NavLink>
			<NavLink to="/store">Store</NavLink>
			<NavLink to="/reviews">Reviews</NavLink>
			<NavLink to="/team">Team</NavLink>
		</div>
	);
};

export default Navigation;
