import { PRODUCTS } from './product-data.js'
import { makeCard } from './card.js';

const list = document.querySelector('.catalogue-section__list');

function filter(event, arr) {
    const buttonId = event.target.dataset.id;

    const filteredItems = arr.filter(item => buttonId === item.category);

    return filteredItems;
} 

list.addEventListener('click', event => {
    filter(event, PRODUCTS);
});

makeCard(PRODUCTS)