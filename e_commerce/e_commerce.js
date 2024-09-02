let products = [
    { id: 1, name: "Shoes 1", price: 20, image: "pexels-melvin-buezo-1253763-2529148.jpg" },
    { id: 2, name: "Shoes 2", price: 35, image: "pexels-monicore-134064.jpg" },
    { id: 3, name: "Shoes 3", price: 50, image: "pexels-webdonut-19090.jpg" }
];

let cart = [];

let productList = document.querySelector('#product-list');
let cartItems = document.querySelector('#cart-items');
let cartCount = document.querySelector('#cart-count');
let cartTotal = document.querySelector('#cart-total');
let checkoutModal = document.querySelector('#checkout-modal');
let checkoutForm = document.querySelector('#checkout-form');
let closeBtn = document.querySelector('.close-btn');

function renderProducts() {
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>Rs${product.price}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    let product = products.find(prod => prod.id === productId);
    cart.push(product);
    updateCart();
}

function updateCart() {
    cartItems.innerHTML = '';
    cart.forEach((product, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <p>${product.name} - RS${product.price} <button onclick="removeFromCart(${index})">Remove</button></p>
        `;
        cartItems.appendChild(itemDiv);
    });

    cartCount.textContent = cart.length;
    const total = cart.reduce((acc, product) => acc + product.price, 0);
    cartTotal.textContent = `Total: RS${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    checkoutModal.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    checkoutModal.style.display = 'none';
});

checkoutForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Order placed successfully!');
    checkoutModal.style.display = 'none';
    cart.length = 0;
    updateCart();
});

renderProducts();
