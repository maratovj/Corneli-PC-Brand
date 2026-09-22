import { toggleClass, backToTop } from './burger-menu.js'

const burgerMenu = document.querySelector('.header__burger-menu');
const backToTopButton = document.querySelector('.to-top');

burgerMenu?.addEventListener('click', toggleClass);
backToTopButton?.addEventListener('click', backToTop);