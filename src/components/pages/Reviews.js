/*eslint-disable*/
import React from 'react';

const Reviews = () => {
    return (
			<section id="reviews" className="py-5">
			
				<br></br>
				<br></br>
				<br></br>
				<h1 className="text-uppercase display-4">REVIEWS</h1>
				<div id="slider" className="carousel slide" data-ride="carousel">
					<div className="carousel-inner">
						{/* <!-- carousel item --> */}
						<div className="carousel-item active">
							<div className="container">
								<div className="row">
									<div className="col-lg-10 mx-auto d-flex justify-content-between review-item py-3">
										{/* <!-- text --> */}
										<div className="reviews-text px-5">
											<h2 className="text-capitalize mb-3 secondary-color">
												okuhle pele
											</h2>
											<p className="lead text-dark">
												The food tastes good 😍😍 Thank you so much Great food
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
										{/* <!-- text --> */}
										<div className="reviews-text px-5">
											<h2 className="text-capitalize mb-3 secondary-color">
												yomi papu
											</h2>
											<p className="lead text-dark">
												I'm actually please with the service they provide. To be
												quite honest, when I rock up there; one is welcomed with
												great respect and actually you get great value for your
												money. Extremely recommend Estratweni Mobile Foods to
												cater for you
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
										{/* <!-- text --> */}
										<div className="reviews-text px-5">
											<h2 className="text-capitalize mb-3 secondary-color">
												khanyisa nqato
											</h2>
											<p className="lead text-dark">
												I must say, you guys make the most mouthwatering fine
												foods ever. I'm personally the biggest FAN of tiro for
												making the BEST JAHA EVER 👏💖. Best brunch
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
				{/* <!-- end of reviews --> */}
			</section>
		);
}

export default Reviews;
