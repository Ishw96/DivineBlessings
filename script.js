// Fetch and display products on products page
const productSection = document.getElementById('product-section');
const productData = JSON.parse(localStorage.getItem('products')) || [];

productData.forEach(product => {
    const productCard = document.createElement('div');
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>₹${product.cost}</p>
    `;
    productSection.appendChild(productCard);
});
