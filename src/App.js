/*eslint-disable*/

import React from 'react';
import './App.css';

class App extends React.Component {
  render() {
	  return (
		<div className="App">
				{/* //social icons  */}
				<div className="container-fluid info p-3" id="top-icons">
				<div className="row">
						<div className="col d-flex justify-content-between align-items-baseline flex-wrap">
							<div className="info-icons p-2">
							<a href="https://www.facebook.com/Mobilefoodscc/" className="mr-2 primary-color">
								<i className="fab fa-facebook fa-2x"></i>
							</a>
							<a href="https://www.instagram.com/estratwenimobilefoods/?hl=en" className="mr-2 primary-color">
								<i className="fab fa-instagram fa-2x"></i>
							</a>
							<a href="https://twitter.com/explore" className="mr-2 primary-color">
								<i className="fab fa-twitter fa-2x"></i>
							</a>
							</div>

							<h2 className="primary-color p-2 text-capitalize">
								1461 Sakhwatsha St, Browns Farms, Cape Town, 7750
							</h2>
						</div>
					</div>
				</div>

				{/* // header section */}
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

					<a href="#special-items" className="btn header-link primary-color">
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
								<a href="#special-items" className="nav-link text-capitalize">
									special items
								</a>
							</li>

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
							<button className="btn nav-btn text-capitalize" type="button">
								order online
							</button>
						</form>
					</div>
				</nav>

				{/* <!-- end of navbar --> */}

				{/* <!-- menu items --> */}
				<section className="py-5" id="special-items">
					<div className="container my-5">
						<div className="row parent-container">
							{/* <!-- menu item --> */}
							<div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
								<div className="item-container">
									<img
										src="img/menu-item-1.jpg"
										className="img-fluid img-thumbnail item-img"
										alt="menu item"
									/>
									<a href="img/menu-item-1.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
							</div>
							{/* <!-- end of menu item -->
					      <!-- menu item --> */}
							<div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
								<div className="item-container">
									<img
										src="img/menu-item-2.jpg"
										className="img-fluid img-thumbnail item-img"
										alt="menu item"
									/>
									<a href="img/menu-item-2.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
							</div>
							{/* <!-- end of menu item -->
					      <!-- menu item --> */}
							<div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
								<div className="item-container">
									<img
										src="img/menu-item-3.jpg"
										className="img-fluid img-thumbnail item-img"
										alt="menu item"
									/>
									<a href="img/menu-item-3.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
							</div>
							{/* <!-- end of menu item -->
					      <!-- menu item --> */}
							<div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
								<div className="item-container">
									<img
										src="img/menu-item-4.jpg"
										className="img-fluid img-thumbnail item-img"
										alt="menu item"
									/>
									<a href="img/menu-item-4.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
							</div>
							{/* <!-- end of menu item -->
					      <!-- menu item --> */}
							<div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
								<div className="item-container">
									<img
										src="img/menu-item-5.jpg"
										className="img-fluid img-thumbnail item-img"
										alt="menu item"
									/>
									<a href="img/menu-item-5.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
							</div>
							{/* <!-- end of menu item -->
					      <!-- menu item --> */}
							<div className="col-10 mx-auto col-sm-6 col-lg-4 my-3">
								<div className="item-container">
									<img
										src="img/menu-item-6.jpg"
										className="img-fluid img-thumbnail item-img"
										alt="menu item"
									/>
									<a href="img/menu-item-6.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
							</div>
							{/* <!-- end of menu item --> */}
						</div>
					</div>
				</section>
				{/* <!-- end of menu items -->

		<!-- menu section --> */}
				<section id="menu" className="py-5 my-5">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								{/* <!-- title --> */}
								<div className="row">
									<div className="col">
										<h1 className="primary-color text-uppercase">
											boerewors rolls
										</h1>
									</div>
								</div>
								{/* <!-- end of title -->
						      <!-- single item --> */}
								<div className="single-item d-flex justify-content-between my-3 p-3">
									<div className="single-item-text">
										<h2 className="text-uppercase text-dark">boerewors rolls</h2>
										<h4 className="text-muted">Lorem ipsum dolor sit amet.</h4>
									</div>
									<div className="single-item-price align-self-end">
										<h1 className="text-uppercase text-dark">ZAR15</h1>
									</div>
								</div>

								{/* <!-- end of single item -->
						      <!-- single item --> */}
								<div className="single-item d-flex justify-content-between my-3 p-3 special">
									<div className="single-item-text">
										<h2 className="text-uppercase text-dark">boerewors rolls</h2>
										<h4 className="text-muted">Lorem ipsum dolor sit amet.</h4>
									</div>
									<div className="single-item-price align-self-end">
										<h1 className="text-uppercase text-dark">ZAR15</h1>
									</div>
									<h3 className="special-text text-capitalize">chef selection</h3>
								</div>

								{/* <!-- end of single item -->
						          <!-- title --> */}
								<div className="row">
									<div className="col">
										<h1 className="primary-color text-uppercase">burgers</h1>
									</div>
								</div>
								{/* <!-- end of title -->
						      <!-- single item --> */}
								<div className="single-item d-flex justify-content-between my-3 p-3">
									<div className="single-item-text">
										<h2 className="text-uppercase text-dark">burgers</h2>
										<h4 className="text-muted">Lorem ipsum dolor sit amet.</h4>
									</div>
									<div className="single-item-price align-self-end">
										<h1 className="text-uppercase text-dark">ZAR15</h1>
									</div>
								</div>

								{/* <!-- end of single item -->
						      <!-- single item --> */}
								<div className="single-item d-flex justify-content-between my-3 p-3 special">
									<div className="single-item-text">
										<h2 className="text-uppercase text-dark">burgers</h2>
										<h4 className="text-muted">Lorem ipsum dolor sit amet.</h4>
									</div>
									<div className="single-item-price align-self-end">
										<h1 className="text-uppercase text-dark">ZAR15</h1>
									</div>
									<h3 className="special-text text-capitalize">chef selection</h3>
								</div>

								{/* <!-- end of single item --> */}
							</div>
							{/* <!-- end of column -->
					      <!-- column --> */}
							<div className="col-md-6">
								{/* <!-- title --> */}
								<div className="row">
									<div className="col">
										<h1 className="primary-color text-uppercase">platters</h1>
									</div>
								</div>
								{/* <!-- end of title --> */}

								{/* <!-- single item --> */}
								<div className="single-item d-flex justify-content-between my-3 p-3 special">
									<div className="single-item-text">
										<h2 className="text-uppercase text-dark">platters</h2>
										<h4 className="text-muted">Lorem ipsum dolor sit amet.</h4>
									</div>
									<div className="single-item-price align-self-end">
										<h1 className="text-uppercase text-dark">ZAR15</h1>
									</div>
									<h3 className="special-text text-capitalize">chef selection</h3>
								</div>

								{/* <!-- end of single item --> */}

								{/* <!-- single item --> */}
								<div className="single-item d-flex justify-content-between my-3 p-3">
									<div className="single-item-text">
										<h2 className="text-uppercase text-dark">platters</h2>
										<h4 className="text-muted">Lorem ipsum dolor sit amet.</h4>
									</div>
									<div className="single-item-price align-self-end">
										<h1 className="text-uppercase text-dark">ZAR15</h1>
									</div>
								</div>

								{/* <!-- end of single item -->

						      <!-- title --> */}
								<div className="row">
									<div className="col">
										<h1 className="primary-color text-uppercase">drinks</h1>
									</div>
								</div>
								{/* <!-- end of title -->
						      <!-- single item --> */}
								<div className="single-item d-flex justify-content-between my-3 p-3 special">
									<div className="single-item-text">
										<h2 className="text-uppercase text-dark">drinks</h2>
										<h4 className="text-muted">Lorem ipsum dolor sit amet.</h4>
									</div>
									<div className="single-item-price align-self-end">
										<h1 className="text-uppercase text-dark">ZAR15</h1>
									</div>
									<h3 className="special-text text-capitalize">chef selection</h3>
								</div>

								{/* <!-- end of single item -->
						      <!-- single item --> */}
								<div className="single-item d-flex justify-content-between my-3 p-3">
									<div className="single-item-text">
										<h2 className="text-uppercase text-dark">drinks</h2>
										<h4 className="text-muted">Lorem ipsum dolor sit amet.</h4>
									</div>
									<div className="single-item-price align-self-end">
										<h1 className="text-uppercase text-dark">ZAR15</h1>
									</div>
								</div>

								{/* <!-- end of single item --> */}
							</div>
							{/* <!-- end of column --> */}
						</div>
					</div>
				</section>
				{/* <!-- end of menu section -->

		      <!-- about  --> */}
				<section id="about" className="py-5">
					<div className="container">
						<div className="row">
							<div className="col-md-6 my-4">
								<h1 className="text-uppercase display-3">about us</h1>
								<h2 className="text">
								Estratweni Mobile Foods is fast food, catering and Hiring business that started in 2016 with only R200.
								We daily run fast food services at our current locations in Gugulethu(ny1 opp the mall) and in Phillipi(close to Sunduza), we as Estratweni Mobile Foods always wanted to make sure we build a strong brand that would be a Black pride, 
								a brand that will reflect real straggles , challenge, progress and hope to our people. 
								That is why he have put lots of efforts in our branding, quality foods and customer service. We sell FOOD as we are known for that. <br/>

								Even so we are more than open to advices and suggestions on what to do🙏🙏
								Meanwhile because our brand is not build upon the greed of money we value our name more than anything. 
								Thank you🙌🏿
								E S T R A T W E N I
								</h2>
								
							</div>
							<div className="col-md-6 about-pictures my-4 d-none d-lg-block">
								<img
									src="img/about1.jpg"
									alt="menu"
									className="img-1 img-thumbnail about-image"
								/>
								<img
									src="img/about2.jpg"
									alt="menu"
									className="img-2 img-thumbnail about-image"
								/>
								<img
									src="img/about3.jpg"
									alt="menu"
									className="img-3 img-thumbnail about-image"
								/>
								<img
									src="img/about4.jpg"
									alt="menu"
									className="img-4 img-thumbnail about-image"
								/>
								<img
									src="img/about5.jpg"
									alt="menu"
									className="img-5 img-thumbnail about-image"
								/>
								<img
									src="img/about6.jpg"
									alt="menu"
									className="img-6 img-thumbnail about-image"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- end of about  -->

		      <!-- reviews --> */}
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
				{/* <!-- team --> */}
				<section id="team" className="py-5">
					<div className="container">
						<div className="row">
							{/* <!-- team member--> */}
							<div className="col-9 col-sm-6 col-lg-4 mx-auto my-4">
								<div className="card">
									<img src="img/customer1.jpg" alt="" className="card-img-top" />
									<div className="card-body">
										<div className="card-title">
											<h1 className="text-capitalize">team member</h1>
										</div>
										<h4 className="primary-color text-capitalize">chef</h4>
									</div>
									<div className="card-footer team-icons d-flex justify-content-between">
										<a href="#">
											<i className="fab fa-facebook fa-2x"></i>
										</a>
										<a href="#">
											<i className="fab fa-instagram fa-2x"></i>
										</a>
										<a href="#">
											<i className="fab fa-twitter fa-2x"></i>
										</a>
									</div>
								</div>
							</div>
							{/* <!-- end of team member -->
					            <!-- team member--> */}
							<div className="col-9 col-sm-6 col-lg-4 mx-auto my-4">
								<div className="card">
									<img src="img/customer2.jpg" alt="" className="card-img-top" />
									<div className="card-body">
										<div className="card-title">
											<h1 className="text-capitalize">team member</h1>
										</div>
										<h4 className="primary-color text-capitalize">chef</h4>
									</div>
									<div className="card-footer team-icons d-flex justify-content-between">
										<a href="#">
											<i className="fab fa-facebook fa-2x"></i>
										</a>
										<a href="#">
											<i className="fab fa-instagram fa-2x"></i>
										</a>
										<a href="#">
											<i className="fab fa-twitter fa-2x"></i>
										</a>
									</div>
								</div>
							</div>
							{/* <!-- end of team member -->
					            <!-- team member--> */}
							<div className="col-9 col-sm-6 col-lg-4 mx-auto my-4">
								<div className="card">
									<img src="img/customer3.jpg" alt="" className="card-img-top" />
									<div className="card-body">
										<div className="card-title">
											<h1 className="text-capitalize">team member</h1>
										</div>
										<h4 className="primary-color text-capitalize">chef</h4>
									</div>
									<div className="card-footer team-icons d-flex justify-content-between">
										<a href="#">
											<i className="fab fa-facebook fa-2x"></i>
										</a>
										<a href="#">
											<i className="fab fa-instagram fa-2x"></i>
										</a>
										<a href="#">
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

				{/* <!-- contact section --> */}
				<section id="contact">
					<div className="container-fluid no-padding">
						<div className="row">
						  <div className="col-md-6 my-3">
							  <div className="embed-responsive embed-responsive-21by9 height-60">
									<iframe className="embed-responsive-item"
                                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3738129141884!2d18.582711515213795!3d-34.008614480617794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc45aaca517215%3A0x32bd05a9e97dd95b!2sEstratweni%20Mobile%20Foods!5e0!3m2!1sen!2sza!4v1594941316394!5m2!1sen!2sza"
                                  width="100%" frameborder="0" style={{border: '0'}} allowfullscreen="" aria-hidden="false"
                                  tabindex="0"></iframe>
                  
								</div>
							</div>
							<div className="col-md-6 my-3 align-self-center">
								<div className="card text-center">
									<div className="card-header text-uppercase">
										<h1 className="text-uppercase">contact us</h1>
									</div>
									<div className="card-body">
										<form action="https://formspree.io/mvowwqvl" method="POST">
											{/* <!-- input group --> */}
											<div className="input-group my-3">
												<div className="input-group-prepend">
													<span className="input-group-text" id="input-text">
														<i className="fas fa-user"></i>
													</span>
												</div>
												<input
													type="text"
													id="text"
													className="form-control form-control-lg"
													placeholder="Enter your name here"
												/>
											</div>
											{/* <!-- input group --> */}
											<div className="input-group my-3">
												<div className="input-group-prepend">
													<span className="input-group-text" id="input-phone">
														<i className="fas fa-phone"></i>
													</span>
												</div>
												<input
													type="text"
													id="phone"
													className="form-control form-control-lg"
													placeholder="Enter your phone here"
												/>
											</div>
											{/* <!-- input group --> */}
											<div className="input-group my-3">
												<div className="input-group-prepend">
													<span className="input-group-text" id="input-email">
														<i className="fas fa-envelope"></i>
													</span>
												</div>
												<input
													type="email"
													id="text"
													name="_replyto"
													className="form-control form-control-lg"
													placeholder="Enter your email here"
												/>
											</div>
											{/* <!-- input group --> */}
											<div className="input-group my-3">
												<div className="input-group-prepend">
													<span className="input-group-text" id="input-email">
														Your message:
													</span>
												</div>
												<label>
													<textarea
														name="message"
														rows="4"
														cols="50"
													></textarea>
												</label>
												<br />
											</div>
											<button
												type="submit"
												className="btn btn-block btn-lg text-uppercase contact-btn"
											>
												<i className="far fa-hand-point-right mr-2"></i>submit
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* <!-- end of contact section -->
		<!-- footer --> */}
				<div className="container-fluid info p-3">
					<div className="row">
						<div className="col d-flex justify-content-between align-items-baseline flex-wrap">
							<div className="info-icons p-2">
							<a href="https://www.facebook.com/Mobilefoodscc/" className="mr-2 primary-color">
									<i className="fab fa-facebook fa-2x"></i>
								</a>
							<a href="https://www.instagram.com/estratwenimobilefoods/?hl=en" className="mr-2 primary-color">
									<i className="fab fa-instagram fa-2x"></i>
								</a>
							<a href="https://twitter.com/explore" className="mr-2 primary-color">
									<i className="fab fa-twitter fa-2x"></i>
								</a>
							</div>

							<h2 className="primary-color p-2 text-uppercase">
								&copy; 2020 Created by Thabiso Klip
							</h2>
						</div>
					</div>
				</div>
				<a href="#top-icons" id="back-to-top" className="p-1">
					<i className="fas fa-arrow-up primary-color fa-3x"></i>
				</a>
			</div>
		);
    
  };
  
};

export default App;
