if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", ready);
} else {
	ready();
}

function ready() {
	var removeCartItemButtons = document.getElementsByClassName("btn-danger");
	for (var i = 0; i < removeCartItemButtons.length; i++) {
		var button = removeCartItemButtons[i];
		button.addEventListener("click", removeCartItem);
	}

	var quantityInputs = document.getElementsByClassName("cart-quantity-input");
	// eslint-disable-next-line
	for (var i = 0; i < quantityInputs.length; i++) {
		var input = quantityInputs[i];
		input.addEventListener("change", quantityChanged);
	}

	var addToCartButtons = document.getElementsByClassName("shop-item-button");
	// eslint-disable-next-line
	for (var i = 0; i < addToCartButtons.length; i++) {
		// eslint-disable-next-line
		var button = addToCartButtons[i];
		button.addEventListener("click", addToCartClicked);
	}
	
	document.getElementsByClassName("btn-purchase")[0].addEventListener("click", purchaseClicked);
}

function purchaseClicked() {
	alert("Thank you for your purchase.\nYour reference number is: " +
			Math.random() * 1000000000000000000);
	var cartItems = document.getElementsByClassName("cart-items")[0];
	while (cartItems.hasChildNodes()) {
		cartItems.removeChild(cartItems.firstChild);
	}
	updateCartTotal();
}

function removeCartItem(event) {
	var buttonClicked = event.target;
	buttonClicked.parentElement.parentElement.remove();
	updateCartTotal();
}

function quantityChanged(event) {
	var input = event.target;
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1;
	}
	updateCartTotal();
}

function addToCartClicked(event) {
	var button = event.target;
	var shopItem = button.parentElement.parentElement;
	var title = shopItem.getElementsByClassName("shop-item-title")[0].innerText;
	var price = shopItem.getElementsByClassName("shop-item-price")[0].innerText;
	var imageSrc = shopItem.getElementsByClassName("shop-item-image")[0].src;
	addItemToCart(title, price, imageSrc);
	updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
	var cartRow = document.createElement("div");
	cartRow.classList.add("cart-row");
	var cartItems = document.getElementsByClassName("cart-items")[0];
	var cartItemNames = cartItems.getElementsByClassName("cart-item-title");
	for (var i = 0; i < cartItemNames.length; i++) {
		if (cartItemNames[i].innerText === title) {
			alert("This item is already added to the cart");
			return;
		}
	}
	var cartRowContents = `
        <div className="cart-item cart-column">
            <img className="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span className="cart-item-title">${title}</span>
        </div>
        <span className="cart-price cart-column">${price}</span>
        <div className="cart-quantity cart-column">
            <input className="cart-quantity-input" type="number" value="1">
            <button className="btn btn-danger" type="button">REMOVE</button>
        </div>`;
	cartRow.innerHTML = cartRowContents;
	cartItems.append(cartRow);
	cartRow
		.getElementsByClassName("btn-danger")[0]
		.addEventListener("click", removeCartItem);
	cartRow
		.getElementsByClassName("cart-quantity-input")[0]
		.addEventListener("change", quantityChanged);
}

function updateCartTotal() {
	var cartItemContainer = document.getElementsByClassName("cart-items")[0];
	var cartRows = cartItemContainer.getElementsByClassName("cart-row");
	var total = 0;
	for (var i = 0; i < cartRows.length; i++) {
		var cartRow = cartRows[i];
		var priceElement = cartRow.getElementsByClassName("cart-price")[0];
		var quantityElement = cartRow.getElementsByClassName(
			"cart-quantity-input"
		)[0];
		var price = parseFloat(priceElement.innerText.replace("ZAR", ""));
		var quantity = quantityElement.value;
		total = total + price * quantity;
	}
	total = Math.round(total * 100) / 100;
	document.getElementsByClassName("cart-total-price")[0].innerText =
		"ZAR" + total;
}

