import * as Carrito from "../datos/carrito.js"
import { productos } from "../datos/lista_productos.js"

function mostrarCarrito() {
    const contProductos = document.getElementById("cont-productos")
    contProductos.replaceChildren();

    Carrito.carrito.forEach(cart_item => {
        const template = document.getElementById("temp-cart-producto");
        const item = template.content.cloneNode(true);
        const product = productos.find(p => p.id == cart_item.id)

        if (!product) return;
        setContentFromProduct(item, product, cart_item);
        hookCartFunctions(item, cart_item);

        contProductos.appendChild(item);
    })
}

function mostrarDetalle() {
    var subtotal = 0;
    const contPago = document.getElementById("cont-pago");

    Carrito.carrito.forEach(cart_item => {
        const product = productos.find(p => p.id == cart_item.id);
        if (product) {
            const precio = product.precio * cart_item.quantity;
            subtotal += precio;
        }
    });

    const precio = contPago.querySelector(".cart-pago-costo");
    precio.textContent = '$ ' + subtotal;
}

function setContentFromProduct(item, product, cart_item) {

    const imagen = item.querySelector(".cart-producto-img");
    imagen.src = product.imagen;

    const nombre = item.querySelector(".cart-producto-nombre");
    const detalle = item.querySelector(".cart-producto-detalle");

    nombre.textContent = product.nombre;
    detalle.textContent = product.detalle;

    const precio = item.querySelector(".cart-producto-precio");
    const cantidad = item.querySelector('input[type="number"]');

    precio.textContent = '$' + product.precio;
    cantidad.value = cart_item.quantity;

}

function hookCartFunctions(item, cart_item) {

    const btnRemove = item.querySelector(".btn-cart.remove");
    const btnPlus = item.querySelector(".btn-cart.plus");
    const btnMinus = item.querySelector(".btn-cart.minus");
    const input = item.querySelector('input[type="number"]');

    btnPlus.onclick = () => {
        input.value = Math.min(parseInt(input.value) + 1, input.max) || 1;
        onValueChanged(input, cart_item.id);
    }

    btnMinus.onclick = () => {
        input.value = Math.max(parseInt(input.value) - 1, input.min) || 1;
        onValueChanged(input, cart_item.id);
    }

    input.onchange = () => {
        input.value = Math.min(Math.max(parseInt(input.value), input.min), input.max) || 1;
        onValueChanged(input, cart_item.id);
    }

    btnRemove.onclick = () => {
        Carrito.removeAllFromCarrito(cart_item.id);
        mostrarCarrito();
        mostrarDetalle();
    }

}

function onValueChanged(input, productId) {
    Carrito.setCantidad(productId, parseInt(input.value));
    mostrarDetalle();
}

window.addEventListener("load", () => {
    mostrarCarrito();
    mostrarDetalle();
});
