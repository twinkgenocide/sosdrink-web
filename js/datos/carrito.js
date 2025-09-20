export let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

export function addToCarrito(product) {
    const existing = carrito.find(item => item.id == product.id)

    if (existing) {
        existing.quantity += 1;
    } else {
        carrito.push({...product, quantity: 1});
    }

    saveCarrito();
}

export function removeFromCarrito(productId) {
    const existing = carrito.find(item => item.id == productId)
    if (existing) {
        existing.quantity -= 1;
        if (existing.quantity <= 0) {
            removeAllFromCarrito(productId)
        }
        saveCarrito();
    }
}

export function setCantidad(productId, cantidad) {
    const existing = carrito.find(item => item.id == productId)
    if (existing) {
        existing.quantity = cantidad;
        if (existing.quantity <= 0) {
            removeAllFromCarrito(productId)
        }
        saveCarrito();
    }
}

export function removeAllFromCarrito(productId) {
    carrito = carrito.filter(item => item.id != productId);
    saveCarrito();
}

export function isInCarrito(productId) {
    for (let item of carrito) {
        if (item.id == productId) return true;
    }
    return false;
}

function saveCarrito() {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}
