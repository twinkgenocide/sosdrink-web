const navbarHTML = `
<div class="navbar-mid">
    <a class="navbar-img" href="index.html"><img src="img/logo.png"></a>
    <hr>
    <div class="navbar-options">
        <a href="products.html">Productos</a>
        <a href="blog.html">Blog</a>
        <a href="about.html">Nosotros</a>
        <a href="contact.html">Contacto</a>
        <a href="login.html">Ingresar</a>
    </div>
    <hr>
</div>
`

const footerHTML = `
<div class="footer-contact">
    <div>
        <h3>Contacto</h3>
        <p>+56 9 98563472</p>
        <p>sosdrink@gmail.com</p>
    </div>
</div>
<div class="footer-socials">
    <div>
        <ul>
            <li><a href="#"><img src="img/social/facebook-48.png"></a></li>
            <li><a href="#"><img src="img/social/instagram-48.png"></a></li>
            <li><a href="#"><img src="img/social/twitter-48.png"></a></li>
        </ul>
    </div>
</div>
`

function insertElements() {
    const nav = document.getElementById("navbar");
    const ftr = document.getElementById("footer");
    nav.innerHTML = navbarHTML;
    ftr.innerHTML = footerHTML;
}

window.addEventListener("load", insertElements);
