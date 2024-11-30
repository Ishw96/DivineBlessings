const productForm = document.getElementById('product-form');
const productList = document.getElementById('product-list');
let products = JSON.parse(localStorage.getItem('products')) || [];

// Display products in admin panel
const displayProducts = () => {
    productList.innerHTML = '';
    products.forEach((product, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            ${product.name} - $${product.cost}
            <button onclick="deleteProduct(${index})">Delete</button>
        `;
        productList.appendChild(li);
    });
};

const deleteProduct = index => {
    products.splice(index, 1);
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
};

productForm.addEventListener('submit', e => {
    e.preventDefault();
    const name = document.getElementById('product-name').value;
    const image = document.getElementById('product-image').value;
    const cost = document.getElementById('product-cost').value;
    
    products.push({ name, image, cost });
    localStorage.setItem('products', JSON.stringify(products));
    displayProducts();
    productForm.reset();
});

displayProducts();
