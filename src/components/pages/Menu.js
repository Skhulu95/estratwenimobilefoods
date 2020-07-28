/*eslint-disable*/
import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Cart from "./Cart";
import "../../App.css";
// import Store from "./Store";

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
									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">Burger & Chips</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-1.jpg"
													/>
													<br></br>
													<h4>
														Beef burger with tomato, lettuce, cucumber, onions
														and chips.
													</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 25.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
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

									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal2"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal2">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">Quarter Chicken & Chips</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-2.jpg"
													/>
													<br></br>
													<h4>
														Grilled quarter chicken with chips and our special
														sauce.
													</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 25.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
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
									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal3"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal3">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">Double Beef Burger</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-3.jpg"
													/>
													<br></br>
													<h4>
														Double beef burger with tomato, lettuce, cucumber,
														onions and chips.
													</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 35.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
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
									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal4"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal4">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">Jaha</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-4.jpg"
													/>
													<br></br>
													<h4>
														Roll with diced meat (beef and sausage) with onions,
														cucumber and chips on the side.
													</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 30.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
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
									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal5"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal5">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">Nuggets & Chips</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-5.jpg"
													/>
													<br></br>
													<h4>Delicious fried chicken nuggets with chips.</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 25.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
												</div>
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
									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal6"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal6">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">Wings</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-6.jpg"
													/>
													<br></br>
													<h4>Six grilled chicken wings.</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 25.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
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
									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal7"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal7">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">2-by-2 Platter</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-7.jpg"
													/>
													<br></br>
													<h4>
														Amazing platter for two, with 2 quarter chicken, 6
														nuggets, salad and chips.
													</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 115.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
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
									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal8"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal8">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">Tough-Guy Special</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-8.jpg"
													/>
													<br></br>
													<h4>
														Tough-Guy Special includes 1 Beef Burger, 1
														Boerewors Roll
													</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 80.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
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
									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal9"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal9">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">Special Platter</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-9.jpg"
													/>
													<br></br>
													<h4>
														Platter for two with 6 wings, 6 nuggets, salad,
														special sauce and chips
													</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 115.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
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
									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal10"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal10">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">Quarantine Special</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-10.jpg"
													/>
													<br></br>
													<h4>
														Platter for two with 2 quarter chickens, 2 beef
														burger, 2 boerewors rolls, salad, special sauce and
														chips.
													</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 160.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
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

									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal11"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal11">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">Mighty-Meatiness</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-11.jpg"
													/>
													<br></br>
													<h4>
														Meaty platter with various types of sliced meat,
														including beef, pork, russian and chicken
													</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 200.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
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
									{/* <!-- Button to Open the Modal --> */}
									<button
										type="button"
										class="btn btn-primary"
										data-toggle="modal"
										data-target="#myModal12"
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

									{/* 
									<!-- The Modal --> */}
									<div class="modal fade" id="myModal12">
										<div class="modal-dialog modal-lg">
											<div class="modal-content">
												{/* <!-- Modal Header --> */}
												<div class="modal-header">
													<h4 class="modal-title">Smash</h4>
													<button
														type="button"
														class="close"
														data-dismiss="modal"
													>
														&times;
													</button>
												</div>

												{/* <!-- Modal body --> */}
												<div class="modal-body">
													<img
														className="ModalImage"
														src="img/menu-item-12.jpg"
													/>
													<br></br>
													<h4>
														Introducing our delicious cold beverage, best served
														chilled.
													</h4>
												</div>

												{/* <!-- Modal footer --> */}
												<div class="modal-footer">
													<h4>ZAR 10.00</h4>
													<button
														type="button"
														class="btn btn-secondary"
														data-dismiss="modal"
													>
														Close
													</button>
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
