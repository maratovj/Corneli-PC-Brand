import { PRODUCTS } from './product-data.js'
import { renderCards } from './card.js';
import { toggleClass, backToTop } from './burger-menu.js'

const list = document.querySelector('.catalogue-section__list');

const burgerMenu = document.querySelector('.header__burger-menu');
const backToTopButton = document.querySelector('.to-top');

burgerMenu.addEventListener('click', toggleClass);
backToTopButton.addEventListener('click', backToTop);

function filter(event, products) {
    const buttonId = event.target.dataset.id;
    const filteredItems = products.filter(product => {

        if (buttonId === 'all') {
            return true;
        }
        return product.category === buttonId;

    });

    return filteredItems;
}

renderCards(PRODUCTS);

list.addEventListener('click', event => {
    const result = filter(event, PRODUCTS);
    renderCards(result);
});