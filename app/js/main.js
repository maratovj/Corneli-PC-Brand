import { toggleClass, backToTop } from './burger-menu.js'

const menu = document.querySelector('.header__link-container');
const overlay = document.querySelector('.overlay')
const burgerMenu = document.querySelector('.header__burger-menu');
const backToTopButton = document.querySelector('.to-top');

burgerMenu?.addEventListener('click', toggleClass(menu, overlay, burgerMenu));
backToTopButton?.addEventListener('click', backToTop);