
const header = ()=>{
    let header = document.querySelector('header');

    header.innerHTML=`
    <header id="head_main">
        <div id="header-flex">
        <span id="header-flex">
            <a href="home.html"><img id="logo" src="MTL_Chaussures/Project/Images/icons/mtl_logo.jpeg"></a>
            <div>
                <input id="txt-search" type="text" placeholder="Search"/>
                <input type="button" id="btn-search"/>
            </div>
        </span>
        <span id="header-flex">
            <a href="addToCart.html">
                <img id="img-header" class="cart" src="Images/icons/cart.ico" alt="">
            </a>
            <a href="">
                <img id="img-header" src="Images/icons/menu_vertical.png" alt="">
            </a>
        </span>
        </div>
        <nav class="navbar .navbar-expand-lg fixed-top">
            <ul class="navbar-nav">
                <li class="menu"><a href="home.html">Home</a></li>
                <li class="menu"><a href="men.html">Men</a></li>
                <li class="menu"><a href="women.html">Women</a></li>
                <li class="menu"><a href="kids.html">Kids</a></li>
                <li class="menu"><a href="order.html">Orders</a></li>
                <li class="menu"><a href="wishlist.html">Wishlist</a></li>
            </ul>
        </nav>
    </header>        
    `;
}
header();