const admnavbarHTML = `
<div class="sidebar">
        <div>
            <div class="logo">
                <span style="font-size:1.5em;"></span>
                <span>SOS Drink Administrador</span>
            </div>
            <nav>
                <ul>
                    <li><a href="#" class="active">🏠 Home</a></li>
                    <li><a href="adm-usuarios.html">👥 Usuarios</a></li>
                    <li><a href="adm-nuevo-usuario.html">➕ Nuevo Usuario</a></li>
                    <li><a href="adm-productos.html">🛒 Productos</a></li>
                    <li><a href="adm-nuevo-producto.html">➕ Nuevo Producto</a></li>
                </ul>
            </nav>
        </div>
        
    </div>
`

function insertElements() {
    const nav = document.getElementById("admnavbar");
    nav.innerHTML = admnavbarHTML;
}

window.addEventListener("load", insertElements);