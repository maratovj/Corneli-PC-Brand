const burgerMenu = document.querySelector('.header__burger-menu');
const close = document.querySelector('.burger-menu--active');
const menu = document.querySelector('.header__link-container');
const backToTopButton = document.querySelector('.to-top');

burgerMenu.addEventListener('click', () => {
    burgerMenu.classList.toggle('burger-menu--active');
    menu.classList.toggle('is-active')
    document.body.classList.toggle('menu-open');
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})
