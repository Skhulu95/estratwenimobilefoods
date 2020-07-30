import React from 'react';

const Header = () => {
    return (
			<div className="container-fluid info p-3" id="top-icons">
				<div className="row">
					<div className="col d-flex justify-content-between align-items-baseline flex-wrap">
						<div className="info-icons p-2">
							<a
								href="https://www.facebook.com/Mobilefoodscc/"
								className="mr-2 primary-color"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-facebook fa-2x"></i>
							</a>
							<a
								href="https://www.instagram.com/estratwenimobilefoods/?hl=en"
								className="mr-2 primary-color"
								target="_blank"
								rel="noopener noreferrer"
							>
								<i className="fab fa-instagram fa-2x"></i>
							</a>
							<a
								href="https://twitter.com/estratweni?lang=en"
								className="mr-2 primary-color"
								target="_blank"
								rel="noopener noreferrer"
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
										<small className="color-color"> mobile foods</small>
									</h1>
									<a
										href="store"
										className="btn main-btn estratweni-btn my-4 text-capitalize"
										target="_blank"
										rel="noopener noreferrer"
									>
										order online
									</a>
								</div>
							</div>
						</div>
					</div>

					<a href="store" className="btn header-link primary-color">
						<i className="fas fa-arrow-down"></i>
					</a>
				</header>
				{/* end of header section */}
			</div>
		);
}

export default Header
