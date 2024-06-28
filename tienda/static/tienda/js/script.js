let cart = [];
let totalPrice = 0;

function addToCart(productName, productPrice) {
    // Añadir producto al carrito
    cart.push({ name: productName, price: productPrice });
    // Actualizar el precio total
    totalPrice += productPrice;
    // Mostrar mensaje de confirmación
    showConfirmationMessage(productName);
    // Actualizar la interfaz de usuario
    updateCartUI();
}

function updateCartUI() {
    const cartItemsElement = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Limpiar la lista del carrito
    cartItemsElement.innerHTML = '';

    // Añadir cada producto del carrito a la lista
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${formatPrice(item.price)}`;
        cartItemsElement.appendChild(li);
    });

    // Actualizar el precio total
    totalPriceElement.textContent = `$${formatPrice(totalPrice)}`;
}

// Función para formatear precios a pesos chilenos
function formatPrice(price) {
    return price.replace(/\d(?=(\d{3})+\.)/g, '$&,');
}

// Función para mostrar un mensaje de confirmación
function showConfirmationMessage(productName) {
    alert(`${productName} agregado al carrito.`);
}

