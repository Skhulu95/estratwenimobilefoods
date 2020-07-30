/*eslint-disable*/
import React from 'react';
import '../../App.css';

const Footer = () => {
    return (
			<div>
				{/*<!-- footer --> */}
				<div className="container-fluid info p-3">
					<a href="/" id="back-to-top" className="p-1">
						<i className="fas fa-arrow-up primary-color fa-3x"></i>
					</a>
					<div className="row">
						<div className="col d-flex justify-content-between align-items-baseline flex-wrap">
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
									href="https://twitter.com/estratweni?lang=en"
									className="mr-2 primary-color"
								>
									<i className="fab fa-twitter fa-2x"></i>
								</a>
							</div>

							<h2 className="primary-color p-2 text-uppercase">
								&copy; 2020 Created by Thabiso Klip
							</h2>
						</div>
					</div>
				</div>
			</div>
		);
}

export default Footer;
