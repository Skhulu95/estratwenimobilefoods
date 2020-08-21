import React from 'react';

const Header = () => {
	return (
		<div className="container-fluid info p-3" id="top-icons">
			<div className="fixed-top">
				{/* <!-- navbar --> */}
				<nav className="navbar navbar-expand-lg">
					<a className="navbar-brand" href="/">
						<img
							src="/img/logo.jpg"
							alt="logo-img"
							style={({ width: "80px" }, { height: "80px" })}
						/>
					</a>
					<a href="/" className="navbar-brand text-uppercase primary-color">
						estratweni <br></br>mobile foods
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
								<a href="/about" className="nav-link text-capitalize">
									about
								</a>
							</li>

							<li className="nav-item">
								<a href="/reviews" className="nav-link text-capitalize">
									reviews
								</a>
							</li>

							<li className="nav-item">
								<a href="/team" className="nav-link text-capitalize">
									team
								</a>
							</li>

							<li className="nav-item">
								<a href="/contact" className="nav-link text-capitalize">
									contact
								</a>
							</li>
						</ul>

						<form className="form-inline d-none d-lg-block mr-5">
							<a href="/store">
								<button
									className="btn nav-btn text-capitalize"
									href="#store"
									type="button"
								>
									order
								</button>
							</a>
						</form>
						<div className="flex-box" id="login">
							{/* <a href="/Log">
								<button
									className="btn nav-btn text-capitalize"
									href="#"
									type="button"
								>
									register
								</button>
							</a> */}
							<a href="/Log">
								<button
									className="btn nav-btn text-capitalize"
									href="#"
									type="button"
								>
									login
								</button>
							</a>
						</div>
					</div>
				</nav>
			</div>
			<div></div>
		</div>
	);
};

export default Header;
