/*eslint-disable*/
import React from 'react';

const Reviews = () => {
    return (
			<div>
				{/*<!-- reviews --> */}
				<section id="reviews" className="py-5">
					<div id="slider" className="carousel slide" data-ride="carousel">
						<div className="carousel-inner">
							{/* <!-- carousel item --> */}
							<div className="carousel-item active">
								<div className="container">
									<div className="row">
										<div className="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
											{/* <!-- image --> */}
											<div className="align-self-center ml-3">
												<img
													src="img/customer1.jpg"
													alt=""
													className="rounded-circle review-img"
												/>
											</div>
											{/* <!-- text --> */}
											<div className="review-text px-5">
												<h2 className="text-capitalize mb-3 primary-color">
													customer name
												</h2>
												<p className="lead text-dark">
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Reprehenderit, animi.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- end of carousel item -->
				      	  <!-- carousel item --> */}
							<div className="carousel-item">
								<div className="container">
									<div className="row">
										<div className="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
											{/* <!-- image --> */}
											<div className="align-self-center ml-3">
												<img
													src="img/customer2.jpg"
													alt=""
													className="rounded-circle review-img"
												/>
											</div>
											{/* <!-- text --> */}
											<div className="review-text px-5">
												<h2 className="text-capitalize mb-3 primary-color">
													customer name
												</h2>
												<p className="lead text-muted">
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Reprehenderit, animi.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- end of carousel item -->
					        <!-- carousel item --> */}
							<div className="carousel-item">
								<div className="container">
									<div className="row">
										<div className="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
											{/* <!-- image --> */}
											<div className="align-self-center ml-3">
												<img
													src="img/customer3.jpg"
													alt=""
													className="rounded-circle review-img"
												/>
											</div>
											{/* <!-- text --> */}
											<div className="review-text px-5">
												<h2 className="text-capitalize mb-3 primary-color">
													customer name
												</h2>
												<p className="lead text-muted">
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Reprehenderit, animi.
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* <!-- end of carousel item --> */}
						</div>
						{/* <!-- carousel controls --> */}
						<a
							href="#slider"
							className="carousel-control-prev"
							role="button"
							data-slide="prev"
						>
							<span className="carousel-control-prev-icon"></span>
						</a>
						<a
							href="#slider"
							className="carousel-control-next"
							role="button"
							data-slide="next"
						>
							<span className="carousel-control-next-icon"></span>
						</a>
					</div>
				</section>
				{/* <!-- end of reviews --> */}
			</div>
		);
}

export default Reviews;
