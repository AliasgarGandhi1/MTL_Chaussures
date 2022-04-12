/*  Name: Chintan Anandkumar Patel
    Student_ID: 2024318 */

// HTML content has written by Aliasgar Gandhi.
const header = ()=>{
    let header = document.querySelector('header');

    header.innerHTML=`
    <header id="head_main">
        <div id="header-flex">
        <span id="header-flex">
            <a href="home.html"><img id="logo" src="Images/icons/mtl_logo2.gif"></a>
            <div>
                <input id="txt-search" type="text" placeholder="Search"/>
                <input type="button" id="btn-search"/>
            </div>
        </span>
        <span id="header-flex">
            <div class="">
                <button id="btVerticleMenu">
                    <img id="img-header" src="Images/icons/menu_vertical.png" alt="">
                </button>
                <div id="VMenu" class="verticle-menu">
                    <a href="login.html" class="">Login</a>
                    <a href="register.html" class="">Sign Up</a>
                    <a href="contact.html" class="">Contact Us</a>
                    <a href="about.html" class="">About Us</a>
                </div>
            </div>
            <a href="cart.html">
                <img id="img-header" class="cart" src="Images/icons/cart_32.png" alt="">
            </a>
        </span>
        </div>
        <nav class="navbar .navbar-expand-lg fixed-top">
            <ul class="navbar-nav">
                <li class="menu"><a href="home.html">Home</a></li>
                <li class="menu"><a href="product.html?type=Men">Men</a></li>
                <li class="menu"><a href="product.html?type=Women">Women</a></li>
                <li class="menu"><a href="product.html?type=Kids">Kids</a></li>
                <li class="menu"><a href="order.html">Orders</a></li>
                <li class="menu"><a href="wishlist.html">Wishlist</a></li>
            </ul>
        </nav>
    </header>        
    `;
}
header();