import { backToTop } from './burger-menu.js'

const menu = document.querySelector('.header__link-container');
const overlay = document.querySelector('.overlay')
const burgerMenu = document.querySelector('.header__burger-menu');

burgerMenu.addEventListener('click', toggleClass);

export function toggleClass() {
    burgerMenu.classList.toggle('burger-menu--active');
    overlay.classList.toggle('overlay--active');
    menu.classList.toggle('is-active')
    document.body.classList.toggle('menu-open');
}

export function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}


const backToTopButton = document.querySelector('.to-top');
backToTopButton?.addEventListener('click', backToTop);