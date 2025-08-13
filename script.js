const menuItems = [
    { name: "Cheese Burger", price: 199, img: "burger.JPEG" },
    { name: "Margherita Pizza", price: 299, img: "pizza.JPEG" },
    { name: "White Sauce Pasta", price: 249, img: "pasta.JPEG" },
    { name: "French Fries", price: 99, img: "french.JPEG" }
];

let cart = [];

function loadMenu() {
    const menuContainer = document.getElementById("menu-container");
    menuItems.forEach((item, index) => {
        const card = document.createElement("div");
        card.classList.add("card", "fade-in");
        card.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>₹${item.price}</p>
            <button class="btn glow" onclick="addToCart(${index})">Add to Cart</button>
        `;
        menuContainer.appendChild(card);
    });
}

function addToCart(index) {
    cart.push(menuItems[index]);
    document.getElementById("cart-count").innerText = cart.length;
    updateCartPopup();
}

function updateCartPopup() {
    const cartItemsContainer = document.getElementById("cart-items");
    const cartTotal = document.getElementById("cart-total");
    cartItemsContainer.innerHTML = "";

    let total = 0;
    cart.forEach(item => {
        const li = document.createElement("li");
        li.innerHTML = `${item.name} <span>₹${item.price}</span>`;
        cartItemsContainer.appendChild(li);
        total += item.price;
    });

    cartTotal.innerText = total;
}

function toggleCart() {
    const popup = document.getElementById("cart-popup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

function checkout() {
    alert("Thank you for your order!");
    cart = [];
    document.getElementById("cart-count").innerText = "0";
    updateCartPopup();
    toggleCart();
}

loadMenu();
