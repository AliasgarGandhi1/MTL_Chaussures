const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <footer class="foot_main flex-container">
        <ul class="ul-foot">
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="#">T&C</a></li>
        <li> <a href="#">Site Map</a></li>
        </ul>
        <div class="center">
            <h3 class="ft_heading">Community</h3>
            <ul class="flex-container">
                <li><a href="#"><img class="menu" src="Images/icons/facebook_logo.png" alt="Facebook"/></a></li>
                <li><a href="#"><img class="menu" src="Images/icons/instagram_logo.png" alt="Instagram"/></a></li>
                <li><a href="#"><img class="menu" src="Images/icons/twitter_logo.png" alt="Twitter"/></a></li>
                <li><a href="#"><img class="menu" src="Images/icons/linkedin_logo.png" alt="LinkedIn"/></a></li>
            </ul>
        </div>
        <div class="center">
            <h3 class="ft_heading">Support</h3>
                <ul class="ul-foot">
                    <li>Support Center</li>
                    <li>Status Page</li>
                </ul>
        </div>
    </footer>`;
}
createFooter();