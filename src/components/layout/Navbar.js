/*eslint-disable*/
import React from 'react';
import Ripples from "react-ripples";

const Navbar = () => {
    return (
			<div className="container-fluid info p-3" id="top-icons">
				<div className="row">
					<div className="col d-flex justify-content-between align-items-baseline flex-wrap">
						<a class="navbar-brand" href="#Navbar">
							<img
								src="/img/logo.jpg"
								style={({ width: "150px" }, { height: "150px" })}
							/>
						</a>
						<div className="info-icons p-2">
							<a
								href="https://www.facebook.com/Mobilefoodscc/"
								className="mr-2 primary-color"
							>
								<i className="fab fa-facebook fa-2x"></i>
							</a>
							<a
								href="https://www.instagram.com/estratwenimobilefoods/?hl=en"
								className="mr-2 primary-color"
							>
								<i className="fab fa-instagram fa-2x"></i>
							</a>
							<a
								href="https://twitter.com/explore"
								className="mr-2 primary-color"
							>
								<i className="fab fa-twitter fa-2x"></i>
							</a>
						</div>

						<h2 className="primary-color p-2 text-capitalize">
							1461 Sakhwatsha St, Browns Farms, Cape Town, 7750
						</h2>
					</div>
				</div>

				<header id="header">
					<div className="container">
						<div className="row height-90 align-items-center justify-content-center">
							<div className="col">
								<div className="banner text-center">
									<h1 className="display-1 text-capitalize w-50 mx-auto">
										<strong className="primary-color">estratweni</strong>
										<small> mobile foods</small>
									</h1>
									<a
										href="#menu"
										className="btn main-btn estratweni-btn my-4 text-capitalize"
									>
										order online
									</a>
								</div>
							</div>
						</div>
					</div>

					<a href="#menu" className="btn header-link primary-color">
						<i className="fas fa-arrow-down"></i>
					</a>
				</header>
				{/* end of header section */}
				{/* <!-- navbar --> */}
				<nav className="navbar navbar-expand-lg">
					<a href="#" className="navbar-brand text-uppercase primary-color">
						estratweni mobile foods
					</a>
					<button
						className="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#myNavbar"
					>
						<div className="toggler-btn">
							<div className="bar bar1"></div>
							<div className="bar bar2"></div>
							<div className="bar bar3"></div>
						</div>
					</button>
					{/* <!-- links --> */}
					<div className="collapse navbar-collapse" id="myNavbar">
						<ul className="navbar-nav mx-auto">
							<li className="nav-item">
								<a href="#menu" className="nav-link text-capitalize">
									menu
								</a>
							</li>

							<li className="nav-item">
								<a href="#about" className="nav-link text-capitalize">
									about
								</a>
							</li>

							<li className="nav-item">
								<a href="#reviews" className="nav-link text-capitalize">
									reviews
								</a>
							</li>

							<li className="nav-item">
								<a href="#team" className="nav-link text-capitalize">
									team
								</a>
							</li>

							<li className="nav-item">
								<a href="#contact" className="nav-link text-capitalize">
									contact
								</a>
							</li>
						</ul>
						<form className="form-inline d-none d-lg-block mr-5">
							<a href="#cart">
								<button
									className="btn nav-btn text-capitalize"
									href="#cart"
									type="button"
								>
									cart
								</button>
							</a>
						</form>
					</div>
				</nav>

				{/* <!-- end of navbar --> */}
			</div>
		);
}

export default Navbar
