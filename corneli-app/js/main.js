//IMPORTS

import { PRODUCTS } from './product-data.js'
import { renderCards } from './card.js';
import { toggleClass, backToTop } from './burger-menu.js'
import { sortByAlphabet, sortByAlphabetReverse } from './filter.js';

// SEARCH SELECTORS

const list = document.querySelector('.catalogue-section__list');
const burgerMenu = document.querySelector('.header__burger-menu');
const backToTopButton = document.querySelector('.to-top');
const filterBtn = document.querySelector('.btn--filter');
const filterBlock = document.querySelector('.filter-block-body');
const sorted = document.querySelector('.alphabetically--filter');
const sortedReverse = document.querySelector('.alphabetically--filter-reverse');

// STATES

let currentCategory = 'all';
let currentSort = null;

// FILTER LOGIC

function filter(category, products) {
    let result = products.filter(product => {
        if (category === 'all') {
            return true;
        }

        if (product.category === category) {
            return category;
        }
    });

    return result;
}

function updateList(products) {

    let filterProducts = filter(currentCategory, products);

    if (currentSort === 'Alphabetically, A-Z') {
        filterProducts = sortByAlphabet(filterProducts);
    }

    if (currentSort === 'Alphabetically, Z-A') {
        filterProducts = sortByAlphabetReverse(filterProducts);
    }

    renderCards(filterProducts);
}

filterBtn.addEventListener('click', (event) => {
    event.stopPropagation;
    filterBlock.classList.toggle('filter--active');
});

document.addEventListener('click', (event) => {
    const clickedOutside = 
        !filterBlock.contains(event.target) &&
        !filterBtn.contains(event.target);

    if (clickedOutside) {
        filterBlock.classList.remove('filter--active');
    }
});

// RENDER LOGIC AFTER FILTER

renderCards(PRODUCTS);

list.addEventListener('click', event => {
    currentCategory = event.target.dataset.id;
    updateList(PRODUCTS);
})

sorted.addEventListener('click', () => {
    currentSort = 'Alphabetically, A-Z';
    updateList(PRODUCTS); 
})

sortedReverse.addEventListener('click', () => {
    currentSort = 'Alphabetically, Z-A';
    updateList(PRODUCTS); 
})

// BURGER MENU AND BACK TO TOP BUTTON LOGIC

burgerMenu.addEventListener('click', toggleClass);
backToTopButton.addEventListener('click', backToTop);
