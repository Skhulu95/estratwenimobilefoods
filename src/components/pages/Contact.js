/*eslint-disable*/
import React from 'react';

const Contact = () => {
    return (
			<div>
				{/* <!-- contact section --> */}
				<section id="contact">
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<br></br>
					<div className="container-fluid no-padding">
						<div className="row">
							<div className="col-md-6 my-3">
								<div className="embed-responsive embed-responsive-21by9 height-60">
									<iframe
										className="embed-responsive-item"
										src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.3738129141884!2d18.582711515213795!3d-34.008614480617794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc45aaca517215%3A0x32bd05a9e97dd95b!2sEstratweni%20Mobile%20Foods!5e0!3m2!1sen!2sza!4v1594941316394!5m2!1sen!2sza"
										width="100%"
										frameborder="0"
										style={{ border: "0" }}
										allowFullScreen=""
										aria-hidden="false"
										tabindex="0"
									></iframe>
								</div>
							</div>
							<div className="col-md-6 my-3 align-self-center">
								<div className="cards text-center">
									<div className="card-header text-uppercase">
										<h1 className="text-uppercase">contact us</h1>
									</div>
									<div className="cards-body">
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
														cols="25"
														placeholder="Type your message here..."
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
			</div>
		);
}

export default Contact;

