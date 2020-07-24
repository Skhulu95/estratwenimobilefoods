/*eslint-disable*/
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Cart from "./Cart";

const Menu = () => {
	return (
		<div>
			<section id="menu" className="py-5">
				<div className="container my-5">
					<div className="col-12" primary-color>
						<h1 className="text-uppercase display-3">menu</h1>
					</div>
					<div className="row parent-container">
						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-1.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-1.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>Burger & chips</h4>
									<br></br>
									<h4>ZAR 25.00</h4>
									<br></br>
									{/* Button trigger modal */}
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton1"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									{/* Modal */}
									<div
										className="modal"
										id="menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="Menu1Label">
														Burger & Chips
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">×</span>
													</button>
												</div>
												<div className="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-1.jpg"
													/>
													<br></br>
													<h4>
														Beef burger with tomato, lettuce, cucumber, onions
														and chips.
													</h4>

													<h4>ZAR 25.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-2.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-2.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>Quarter Chicken & Chips</h4>
									<br></br>
									<h4>ZAR 25.00</h4>
									<br></br>
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton2"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									<div
										className="modal"
										id="Menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="Menu1Label">
														Quarter Chicken & Chips
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">×</span>
													</button>
												</div>
												<div className="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-2.jpg"
													/>
													<br></br>
													<h4>
														Grilled quarter chicken with chips and our special
														sauce.
													</h4>

													<h4>ZAR 25.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-3.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-3.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>Double Beef Burger</h4>
									<br></br>
									<h4>Zar 35.00</h4>
									<br></br>
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton3"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									<div
										className="modal"
										id="Menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="Menu1Label">
														Double Beef Burger
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">×</span>
													</button>
												</div>
												<div className="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-3.jpg"
													/>
													<br></br>
													<h4>
														Double beef burger with tomato, lettuce, cucumber,
														onions and chips.
													</h4>

													<h4>ZAR 35.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-4.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-4.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>Jaha</h4>
									<br></br>
									<h4>ZAR 30.00</h4>
									<br></br>
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton4"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									<div
										className="modal"
										id="Menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="MenuLabel">
														Jaha
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">×</span>
													</button>
												</div>
												<div className="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-4.jpg"
													/>
													<br></br>
													<h4>
														Roll with diced meat (beef and sausage) with onions,
														cucumber and chips on the side.
													</h4>

													<h4>Zar 30.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-5.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-5.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>Nuggets & Chips</h4>
									<br></br>
									<h4>ZAR 25.00</h4>
									<br></br>
									{/* <!--Button trigger modal--> */}
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton5"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									<div
										className="modal"
										id="Menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<h5 className="modal-title" id="Menu1Label">
													Nuggets & Chips
												</h5>
												<button
													type="button"
													className="close"
													data-dismiss="modal"
													aria-label="Close"
												>
													<span aria-hidden="true">×</span>
												</button>
											</div>
											<div className="modal-body">
												<img className="ModalImage" src="img/menu-item-5.jpg" />
												<br></br>
												<h4>Delicious fried chicken nuggets with chips.</h4>

												<h4>ZAR 25.00</h4>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* </div> */}
						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-6.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-6.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>Wings</h4>
									<br></br>
									<h4>ZAR 25.00</h4>
									<br></br>
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton6"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									<div
										className="modal"
										id="Menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="Menu1Label">
														Wings
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">×</span>
													</button>
												</div>
												<div className="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-6.jpg"
													/>
													<br></br>
													<h4>Six grilled chicken wings.</h4>

													<h4>ZAR 25.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<br></br>
						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-7.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-7.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>2-by-2 Platter</h4>
									<br></br>
									<h4>ZAR 115.00</h4>
									<br></br>
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton7"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									<div
										className="modal"
										id="Menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="Menu1Label">
														2-by-2 Platter
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">×</span>
													</button>
												</div>
												<div className="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-7.jpg"
													/>
													<h4>
														Amazing platter for two, with 2 quarter chicken, 6
														nuggets, salad and chips.
													</h4>

													<h4>ZAR 115.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-8.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-8.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>Tough-Guy Special</h4>
									<br></br>
									<h4>ZAR 80.00</h4>
									<br></br>
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton8"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									<div
										className="modal"
										id="Menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="Menu1Label">
														Tough-Guy Special
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">×</span>
													</button>
												</div>
												<div className="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-8.jpg"
													/>
													<h4>
														Tough-Guy Special includes 1 Beef Burger, 1
														Boerewors Roll
													</h4>

													<h4>ZAR 80.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-9.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-9.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>Special Platter</h4>
									<br></br>
									<h4>ZAR 115.00</h4>
									<br></br>
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton9"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									<div
										className="modal"
										id="Menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="Menu1Label">
														Special Platter
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">×</span>
													</button>
												</div>
												<div className="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-9.jpg"
													/>
													<h4>
														Platter for two with 6 wings, 6 nuggets, salad,
														special sauce and chips
													</h4>

													<h4>ZAR 115.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-10.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-10.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>Quarantine Special</h4>
									<br></br>
									<h4>ZAR 160.00</h4>
									<br></br>
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton10"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									<div
										className="modal"
										id="Menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="Menu1Label">
														Quarantine Special
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">×</span>
													</button>
												</div>
												<div className="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-10.jpg"
													/>
													<h4>
														Platter for two with 2 quarter chickens, 2 beef
														burger, 2 boerewors rolls, salad, special sauce and
														chips.
													</h4>

													<h4>ZAR 160.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-11.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-11.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											menu item
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>Mighty-Meatiness</h4>
									<br></br>
									<h4>ZAR 200.00</h4>
									<br></br>
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton11"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									<div
										className="modal"
										id="Menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="Menu1Label">
														Mighty-Meatiness
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">×</span>
													</button>
												</div>
												<div className="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-11.jpg"
													/>
													<h4>
														Meaty platter with various types of sliced meat,
														including beef, pork, russian and chicken
													</h4>

													<h4>ZAR 200.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-xl-4 col-sm-12">
							<div className="card">
								<div className="item-container">
									<img
										className="img-fluid img-thumbnail item-img"
										src="img/menu-item-12.jpg"
										alt="menu item"
										style={({ width: "300px" }, { height: "300px" })}
									></img>
									<a href="img/menu-item-12.jpg">
										<h1 className="text-uppercase text-center item-link px-3">
											smash
										</h1>
									</a>
								</div>
								<div className="card-body">
									<h4>Smash</h4>
									<br></br>
									<h4>ZAR 10.00</h4>
									<br></br>
									<button
										type="button"
										className="btn MoreInfo"
										data-toggle="modal"
										data-target="#Menu1"
									>
										More Info
									</button>
									<button
										id="CartButton12"
										type="button"
										className="btn MoreInfo cardButton"
									>
										Add To Cart
									</button>
									<div
										className="modal"
										id="Menu1"
										tabindex="-1"
										role="dialog"
										aria-labelledby="Menu1Label"
										aria-hidden="true"
									>
										<div className="modal-dialog" role="document">
											<div className="modal-content">
												<div className="modal-header">
													<h5 className="modal-title" id="Menu1Label">
														Smash
													</h5>
													<button
														type="button"
														className="close"
														data-dismiss="modal"
														aria-label="Close"
													>
														<span aria-hidden="true">×</span>
													</button>
												</div>
												<div className="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-12.jpg"
													/>
													<h4>
														Introducing our delicious cold beverage, best served
														chilled.
													</h4>

													<h4>ZAR 10.00</h4>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Menu;
