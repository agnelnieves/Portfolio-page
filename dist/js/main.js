// Select DOM Items (HTML tags, attributes, etc)
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
// Selecting all menu items
const navItems = document.querySelectorAll('.nav-item');

// Set Initial State of Menu
let showMenu = false;

// Detect mouse click
menuBtn.addEventListener('click', toggleMenu);

// menu opener/hider function
function toggleMenu() {
    if(!showMenu){
        // adding classes
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        // Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        // Set menu state
        showMenu = false;
    }
}

var typed = new Typed('#typed', {
stringsElement: '#typed-strings',
startDelay: 1000,
loop: true,
loopCount: false,
typeSpeed: 100,
backSpeed: 100
});
