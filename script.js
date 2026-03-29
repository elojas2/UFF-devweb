const form = document.getElementById('product-form');
const inputName = document.getElementById('product-name');
const inputCategory = document.getElementById('product-category');
const inputPrice = document.getElementById('product-price');

const productList = document.getElementById('list-product');

let products = [];

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = inputName.value.trim();
    const category = inputCategory.value.trim();
    const price = parseFloat(inputPrice.value);

    if (!validateInput(name, category, price)) {
        return;
    }

    const product = {
        name: name,
        category: category,
        price: price
    };

    products.push(product);
    renderProducts();
    form.reset();
});

function renderProducts() {
    productList.innerHTML = '';

    products.forEach(function(product, index) {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Categoria: ${product.category}</p>
            <p>Preço: R$${product.price.toFixed(2)}</p>
            <button onclick="removeProduct(${index})">Remover</button>
        `;
        productList.appendChild(productItem);
    });
}

function removeProduct(index) {
    products.splice(index, 1);
    renderProducts();
}

function validateInput(name, category, price) {

    if (name == ''){
        alert('O campo "Nome do Produto" é obrigatório.');
        inputName.focus();
        return false;
    }
    if (category == ''){
        alert('O campo "Categoria" é obrigatório.');
        inputCategory.focus();
        return false;
    }
    if (isNaN(price) || price <= 0){
        alert('O campo "Preço" deve ser um número válido e maior que zero.');
        inputPrice.focus();
        return false;
    }

    return true;
}