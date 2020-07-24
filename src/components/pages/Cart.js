// eslint-disable-next-line
import React from "react";



const Cart = () => {
	return (
		<div>
			<section id="cart">
				<div className="container-fluid no-padding">
					<h1>Your cart</h1>
					<div id="CartContent">
						<div class="row padding text-center">
							<div class="col-12">
								<table class="table table-striped">
									<tbody></tbody>
								</table>
							</div>
						</div>
						<div class="row padding">
							<div class="col-12">
								<div id="FormDiv">
									<form>
										<fieldset>
											<button id="ClearButton">Clear All Cart Items</button>
											<div class="form-group">
												<label for="TextInput">
													Enter Promo Code for Discount
												</label>
												<input
													type="text"
													id="TextInput"
													class="form-control"
													placeholder="Coupon"
												></input>
												<br></br>
												<button onclick="AddDiscount()" id="CouponButton">
													Add Code
												</button>
											</div>
											<div class="form-group">
												<label for="Select">Delivery (Optional)</label>
												<select
													onchange="CourierSelect()"
													id="Select"
													class="form-control"
												>
													<option hidden disabled selected>
														Select Delivery Option
													</option>
													<option>Collect In Store</option>
													<option>eKasi Eats</option>
												</select>
											</div>
											<div class="form-check"></div>
											<p id="TotalDisplay">Total:</p>
											<button
												onclick="Order()"
												type="submit"
												class="btn btn-primary"
											>
												Confirm Order
											</button>
										</fieldset>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Cart;
