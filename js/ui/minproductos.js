import { getProductos } from "../datos/lista_productos.js";

function mostrarProductos() {
    const productos  = getProductos();
    const contenedor = document.getElementById("cont-minproductos");

    productos.forEach(prod => {
        const template = document.getElementById("temp-minproducto");
        const item = template.content.cloneNode(true);

        const imagen = item.querySelector("img");
        const nombre = item.querySelector("h2");
        const precio = item.querySelector("h3");

        imagen.src = prod.imagen;
        nombre.textContent = prod.nombre;
        precio.textContent = '$' + prod.precio;

        contenedor.appendChild(item);
    });
}

window.addEventListener("load", mostrarProductos);
