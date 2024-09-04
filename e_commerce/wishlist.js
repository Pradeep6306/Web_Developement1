let wishlist = [
    { id: 1, name: "Shoes 1", price: 20, image: "pexels-melvin-buezo-1253763-2529148.jpg" },
    { id: 2, name: "Shoes 2", price: 35, image: "pexels-monicore-134064.jpg" },
    { id: 3, name: "Shoes 3", price: 50, image: "pexels-webdonut-19090.jpg" }
];

let wishlistItems = document.querySelector('#wishlist-items');

function renderWishlist() {
    wishlistItems.innerHTML = ''; 

    wishlist.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('wishlist-item');
        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Rs${item.price}</p>
            <button onclick="removeFromWishlist(${item.id})">Remove from Wishlist</button>
        `;
        wishlistItems.appendChild(itemDiv);
    });
}

function removeFromWishlist(itemId) {
    wishlist = wishlist.filter(item => item.id !== itemId);
    renderWishlist(); 
}



renderWishlist();
