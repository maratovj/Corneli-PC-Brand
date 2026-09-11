const burgerMenu = document.querySelector('.header__burger-menu');
const menu = document.querySelector('.header__link-container');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu--active');
    menu.classList.toggle('is-active')
    document.body.classList.toggle('menu-open');
});