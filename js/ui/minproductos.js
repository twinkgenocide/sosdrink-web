import { productos } from "../datos/lista_productos.js";
import { isInCarrito, addToCarrito, removeAllFromCarrito } from "../datos/carrito.js"

function mostrarProductos() {
    const contenedor = document.getElementById("cont-minproductos");

    productos.forEach(prod => {
        const template = document.getElementById("temp-minproducto");
        const item = template.content.cloneNode(true);

        const imagen = item.querySelector(".minproducto-img");
        const nombre = item.querySelector(".minproducto-nombre");
        const precio = item.querySelector(".minproducto-precio");

        imagen.src = prod.imagen;
        nombre.textContent = prod.nombre;
        precio.textContent = '$' + prod.precio;

        const inCarrito = isInCarrito(prod.id);

        const btnAdd = item.querySelector(".btn-cart.add");
        const btnRemove = item.querySelector(".btn-cart.remove");

        if (inCarrito) {
            btnAdd.style.display = "none";
        } else {
            btnRemove.style.display = "none";
        }

        btnAdd.onclick = () => {
            btnAdd.style.display = "none";
            btnRemove.style.display = "";
            addToCarrito({ id: prod.id });
        }

        btnRemove.onclick = () => {
            btnRemove.style.display = "none";
            btnAdd.style.display = "";
            removeAllFromCarrito(prod.id);
        }

        contenedor.appendChild(item);
    });
}

window.addEventListener("load", mostrarProductos);
