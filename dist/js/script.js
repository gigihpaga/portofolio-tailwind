// Navbar Fixed
window.onscroll = function () {
    const elmHeader = document.querySelector('header');
    const positionOffsetHeader = elmHeader.offsetTop;
    // if scroll value > 0 then add class, else remove class
    if (window.pageYOffset > positionOffsetHeader) {
        elmHeader.classList.add('navbar--fixex');
    } else {
        elmHeader.classList.remove('navbar--fixex');
    }
};

// Button Hamburger
const btnHamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

btnHamburger.addEventListener('click', function () {
    // btnHamburger = Burger || X
    btnHamburger.classList.toggle('hamburger--active');
    // navMenu = visible || hidden
    navMenu.classList.toggle('hidden');
});
