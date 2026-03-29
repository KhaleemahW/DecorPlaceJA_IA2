let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    cart.push({ name, price });
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function displayCart() {
    let cartItems = document.getElementById("cartItems");
    let total = 0;

    if (!cartItems) return;

    cartItems.innerHTML = "";

    cart.forEach(item => {
        total += item.price;
        cartItems.innerHTML += `<p>${item.name} - $${item.price}</p>`;
    });

    document.getElementById("total").innerText = "Total: $" + total;
}

function clearCart() {
    cart = [];
    localStorage.removeItem("cart");
    displayCart();
}

function login() {
    alert("Login successful (demo)");
    window.location.href = "index.html";
}
