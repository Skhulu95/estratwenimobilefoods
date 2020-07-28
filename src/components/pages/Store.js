import React from "react";
import "../../App.css";

import "../../store";

const Store = () => {
	return (
		<div>
			<section id="about" class="container content-section">
				<h2 class="section-header">MENU</h2>
				<div class="shop-items">
					<div class="shop-item">
						<span class="shop-item-title">Burger & chips</span>
						<img
							class="shop-item-image"
							src="img/menu-item-1.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						></img>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR25.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* <!-- The Modal --> */}
							<div class="modal fade" id="myModal">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">Burger & Chips</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
												src="img/menu-item-1.jpg"
											/>
											<br></br>
											<h4>
												Beef burger with tomato, lettuce, cucumber, onions and
												chips.
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
					<div class="shop-item">
						<span class="shop-item-title">Quarter Chicken & Chips</span>
						<img
							class="shop-item-image"
							src="img/menu-item-2.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						></img>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR25.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal2"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* 
									<!-- The Modal --> */}
							<div class="modal fade" id="myModal2">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">Quarter Chicken & Chips</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
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
					<div class="shop-item">
						<span class="shop-item-title">Double Beef Burger</span>
						<img
							class="shop-item-image"
							src="img/menu-item-3.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						></img>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR35.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal3"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* <!-- The Modal --> */}
							<div class="modal fade" id="myModal3">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">Double Beef Burger</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
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
					<div class="shop-item">
						<span class="shop-item-title">Jaha</span>
						<img
							class="shop-item-image"
							src="img/menu-item-4.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						/>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR30.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal4"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* 
									<!-- The Modal --> */}
							<div class="modal fade" id="myModal4">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">Jaha</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
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

					<div class="shop-item">
						<span class="shop-item-title">Nuggets & Chips</span>
						<img
							class="shop-item-image"
							src="img/menu-item-5.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						></img>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR25.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal5"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* 
									<!-- The Modal --> */}
							<div class="modal fade" id="myModal5">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">Nuggets & Chips</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
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
					<div class="shop-item">
						<span class="shop-item-title">Wings</span>
						<img
							class="shop-item-image"
							src="img/menu-item-6.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						/>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR25.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal6"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* 
									<!-- The Modal --> */}
							<div class="modal fade" id="myModal6">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">Wings</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
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
					<div class="shop-item">
						<span class="shop-item-title">2-by-2 Platter</span>
						<img
							class="shop-item-image"
							src="img/menu-item-7.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						></img>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR115.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal7"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* 
									<!-- The Modal --> */}
							<div class="modal fade" id="myModal7">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">2-by-2 Platter</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
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
					<div class="shop-item">
						<span class="shop-item-title">Tough-Guy Special</span>
						<img
							class="shop-item-image"
							src="img/menu-item-8.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						></img>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR80.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal8"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* 
									<!-- The Modal --> */}
							<div class="modal fade" id="myModal8">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">Tough-Guy Special</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
												src="img/menu-item-8.jpg"
											/>
											<br></br>
											<h4>
												Tough-Guy Special includes 1 Beef Burger, 1 Boerewors
												Roll
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

					<div class="shop-item">
						<span class="shop-item-title">Special Platter</span>
						<img
							class="shop-item-image"
							src="img/menu-item-9.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						></img>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR115.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal9"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* 
									<!-- The Modal --> */}
							<div class="modal fade" id="myModal9">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">Special Platter</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
												src="img/menu-item-9.jpg"
											/>
											<br></br>
											<h4>
												Platter for two with 6 wings, 6 nuggets, salad, special
												sauce and chips
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

					<div class="shop-item">
						<span class="shop-item-title">Quarantine Special</span>
						<img
							class="shop-item-image"
							src="img/menu-item-10.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						></img>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR160.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal10"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* 
									<!-- The Modal --> */}
							<div class="modal fade" id="myModal10">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">Quarantine Special</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
												src="img/menu-item-10.jpg"
											/>
											<br></br>
											<h4>
												Platter for two with 2 quarter chickens, 2 beef burger,
												2 boerewors rolls, salad, special sauce and chips.
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
					<div class="shop-item">
						<span class="shop-item-title">Mighty-Meatiness</span>
						<img
							class="shop-item-image"
							src="img/menu-item-11.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						></img>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR200.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal11"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* 
									<!-- The Modal --> */}
							<div class="modal fade" id="myModal11">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">Mighty-Meatiness</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
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
					<div class="shop-item">
						<span class="shop-item-title">Smash</span>
						<img
							class="shop-item-image"
							src="img/menu-item-12.jpg"
							alt="menu item"
							style={({ width: "300px" }, { height: "300px" })}
						></img>
						<div class="shop-item-details">
							<span class="shop-item-price">ZAR10.00</span>
							{/* <!-- Button to Open the Modal --> */}
							<button
								type="button"
								class="btn btn-primary"
								data-toggle="modal"
								data-target="#myModal12"
							>
								More Info
							</button>
							<button class="btn btn-primary shop-item-button" type="button">
								ADD TO CART
							</button>
							{/* 
									<!-- The Modal --> */}
							<div class="modal fade" id="myModal12">
								<div class="modal-dialog modal-lg">
									<div class="modal-content">
										{/* <!-- Modal Header --> */}
										<div class="modal-header">
											<h4 class="modal-title">Smash</h4>
											<button type="button" class="close" data-dismiss="modal">
												&times;
											</button>
										</div>

										{/* <!-- Modal body --> */}
										<div class="modal-body">
											<img
												className="ModalImage"
												alt="menu item"
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
			</section>

			<section id="about" class="container content-section">
				<h2 class="section-header">CART</h2>
				<div class="cart-row">
					<span class="cart-item cart-header cart-column">ITEM</span>
					<span class="cart-price cart-header cart-column">PRICE</span>
					<span class="cart-quantity cart-header cart-column">QUANTITY</span>
				</div>
				<div class="cart-items"></div>
				<div class="cart-total">
					<strong class="cart-total-title">Total</strong>
					<span class="cart-total-price">ZAR0</span>
				</div>
				<button class="btn btn-primary btn-purchase" type="button">
					PURCHASE
				</button>
			</section>
		</div>
	);
};

export default Store;
