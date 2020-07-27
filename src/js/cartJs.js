const $ = window.$;

var arr2 = [];
var totalPrice = Number(0);
$(document).ready(function () {
    row();
    

    $("#CartButton1").click(function () {
        var Image = "<img src='img/menu-item-1.jpg'>";
        var MenuItem = "Burger & chips";
        var Price = 25;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#CartButton2").click(function () {
        var Image = "<img src='img/menu-item-2.jpg'>";
        var MenuItem = "Quarter Chicken & Chips";
        var Price = 25;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#CartButton3").click(function () {
        var Image = "<img src='img/menu-item-3.jpg'>";
        var MenuItem = "Double Beef Burger";
        var Price = 35;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#CartButton4").click(function () {
        var Image = "<img src='images/img/menu-item-4.jpg'>";
        var MenuItem = "Jaha";
        var Price = 30;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#CartButton5").click(function () {
        var Image = "<img src='img/menu-item-5.jpg'>";
        var MenuItem = "Nuggets & Chips";
        var Price = 25;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#CartButton6").click(function () {
        var Image = "<img src='img/menu-item-6.jpg'>";
        var MenuItem = "Wings";
        var Price = 25;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#CartButton7").click(function () {
        var Image = "<img src='img/menu-item-7.jpg'>";
        var MenuItem = "2-by-2 Platter";
        var Price = 115;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#CartButton8").click(function () {
        var Image = "<img src='img/menu-item-8.jpg'>";
        var MenuItem = "Tough-Guy Special";
        var Price = 80;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#CartButton9").click(function () {
        var Image = "<img src='img/menu-item-9.jpg'>";
        var MenuItem = "Special Platter";
        var Price = 115;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#CartButton10").click(function () {
        var Image = "<img src='img/menu-item-10.jpg'>";
        var MenuItem = "Quarantine Special";
        var Price = 160;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#CartButton11").click(function () {
        var Image = "<img src='img/menu-item-11.jpg'>";
        var MenuItem = "Mighty-Meatiness";
        var Price = 200;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#CartButton12").click(function () {
        var Image = "<img src='img/menu-item-12.jpg' >";
        var MenuItem = "Smash";
        var Price = 10;
        var obj = {
            Image_: Image,
            MenuItem_: MenuItem,
            Price_: Price,
        };
        arr2.push(obj); //pushing object to arr
        localStorage.tbl = JSON.stringify(arr2); //JS Object (array) to JSON string
        totalPrice += Price;
        alert("Your current total is R" + totalPrice);
    });

    $("#ClearButton").click(function () {
        localStorage.clear();
    });
});

var row = function () {
    if (localStorage.tbl) {
        arr2 = JSON.parse(localStorage.tbl); //JSON string to JS Object
        for (var i = 0; i < arr2.length; i++) {
            var _image = arr2[i].Image_;
            var _MenuItem = arr2[i].MenuItem_;
            totalPrice = arr2[i].Price_;
            // totalPrice += _price = arr2[i].Price_;


            var row =
                "<tr id='" +
                i +
                "'><td>" +
                (i + 1) +
                // "</td><td>" +
                // _image +
                "</td><td>" +
                _MenuItem +
                // "</td><td>R" +
                // _price +
                "</td><td><button class='remove'>Remove</button></td></tr>";
            $("tbody").append(row);
        }

        $(".remove").click(function () {
            var parent = $(this).parent().parent();

            var itemId = parseInt(parent.attr("id"));

            function changeNextId(next) {
                var currentId = parseInt(next.attr("id"));
                next.attr("id", currentId - 1);
                if (next.length) {
                    changeNextId(next.next());
                }
            }
            changeNextId(parent.next());

            totalPrice -= arr2[itemId].Price_;
            $("#TotalDisplay").text("Total: R" + totalPrice);
            arr2.splice(itemId, 1);
            localStorage.tbl = JSON.stringify(arr2);

            parent.remove();
        });

        $("#TotalDisplay").text("Total: R" + totalPrice);
    }
};

function Order() {
    alert(
        "Your order has been successfully placed.\nYour reference number is: " +
        Math.random() * 1000000000000000000
    );
    totalPrice = 0;
    localStorage.clear();
}

function CourierSelect() {
    var selected = document.getElementById("Select").value;
    if (selected === "Courier") {
        totalPrice += 50;
        document.getElementById("TotalDisplay").innerHTML = "Total: R" + totalPrice;
    }
}

$("#CouponButton").click(function (event) {
    event.preventDefault();
    var coupon = document.getElementById("TextInput").value;
    if (coupon != "") {
        var discount = totalPrice * 10 / 100;
        totalPrice = totalPrice - discount;
        document.getElementById("TotalDisplay").innerHTML = "Total: R" + totalPrice;
    }
});