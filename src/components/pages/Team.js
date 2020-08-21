/*eslint-disable*/
import React from 'react';

const Team = () => {
    return (
			<div>
				{/* <!-- team --> */}
				<section id="team" className="py-5">
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<h1 className="text-uppercase display-4">our team</h1>
					<div className="container">
						<div className="row">
							{/* <!-- team member--> */}
							<div className="col-9 col-sm-6 col-lg-4 mx-auto my-4">
								<div className="card">
									<img
										src="img/team1.jpg"
										alt=""
										className="card-img-top"
										style={({ width: "300px" }, { height: "300px" })}
									/>
									<div className="card-body">
										<div className="card-title">
											<h1 className="text-capitalize">blax</h1>
										</div>
										<h4 className="primary-color text-capitalize">chef</h4>
									</div>
									<div className="card-footer team-icons d-flex justify-content-between">
										<a
											href="https://www.facebook.com/siphumeze.ramncwana"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-facebook fa-2x"></i>
										</a>
										<a
											href="https://www.instagram.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-instagram fa-2x"></i>
										</a>
										<a
											href="https://www.twitter.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-twitter fa-2x"></i>
										</a>
									</div>
								</div>
							</div>
							{/* <!-- end of team member -->
					            <!-- team member--> */}
							<div className="col-9 col-sm-6 col-lg-4 mx-auto my-4">
								<div className="card">
									<img
										src="img/team2.jpg"
										alt=""
										className="card-img-top"
										style={({ width: "300px" }, { height: "300px" })}
									/>
									<div className="card-body">
										<div className="card-title">
											<h1 className="text-capitalize">space</h1>
										</div>
										<h4 className="primary-color text-capitalize">chef</h4>
									</div>
									<div className="card-footer team-icons d-flex justify-content-between">
										<a
											href="https://www.facebook.com/siphamandlathando.mavumengwana"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-facebook fa-2x"></i>
										</a>
										<a
											href="https://www.instagram.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-instagram fa-2x"></i>
										</a>
										<a
											href="https://www.twitter.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-twitter fa-2x"></i>
										</a>
									</div>
								</div>
							</div>
							{/* <!-- end of team member -->
					            <!-- team member--> */}
							<div className="col-9 col-sm-6 col-lg-4 mx-auto my-4">
								<div className="card">
									<img
										src="img/team3.jpg"
										alt=""
										className="card-img-top"
										style={({ width: "300px" }, { height: "300px" })}
									/>
									<div className="card-body">
										<div className="card-title">
											<h1 className="text-capitalize">bahle</h1>
										</div>
										<h4 className="primary-color text-capitalize">chef</h4>
									</div>
									<div className="card-footer team-icons d-flex justify-content-between">
										<a
											href="https://www.facebook.com/bahle.langwana"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-facebook fa-2x"></i>
										</a>
										<a
											href="https://www.instagram.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-instagram fa-2x"></i>
										</a>
										<a
											href="https://www.twitter.com"
											target="_blank"
											rel="noopener noreferrer"
										>
											<i className="fab fa-twitter fa-2x"></i>
										</a>
									</div>
								</div>
							</div>
							{/* <!-- end of team member --> */}
						</div>
					</div>
				</section>
				{/* <!-- end of team --> */}
			</div>
		);
}

export default Team;
