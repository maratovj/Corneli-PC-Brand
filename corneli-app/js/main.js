import { PRODUCTS } from './product-data.js'
import { renderCards } from './card.js';

const list = document.querySelector('.catalogue-section__list');

function filter(event, products) {
    const buttonId = event.target.dataset.id;
    const filteredItems = products.filter(product => {

        if (!product) return;

        return product.category === buttonId;

    });

    return filteredItems;
}

list.addEventListener('click', event => {
    const result = filter(event, PRODUCTS);
    renderCards(result);
});