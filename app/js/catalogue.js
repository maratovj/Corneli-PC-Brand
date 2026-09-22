import { PRODUCTS } from './product-data.js';
import { renderCards } from './card.js';
import { sortByAlphabet, sortByAlphabetReverse, lowToHigh, highToLow } from './filter.js';

const list = document.querySelector('.catalogue-section__list');
const filterBtn = document.querySelector('.btn--filter');
const filterBlock = document.querySelector('.filter-block-body');
const sorted = document.querySelector('.alphabetically--filter');
const sortedReverse = document.querySelector('.alphabetically--filter-reverse');
const sortLowToHigh = document.querySelector('.low-to-high');
const sortHighToLow = document.querySelector('.high-to-low');

let currentCategory = 'all';
let currentSort = null;

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

    if (currentSort === 'Price, low to high') {
        filterProducts = lowToHigh(filterProducts);
    }

    if (currentSort === 'Price, high to low') {
        filterProducts = highToLow(filterProducts);
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

sortLowToHigh.addEventListener('click', () => {
    currentSort = 'Price, low to high';
    updateList(PRODUCTS);
})

sortHighToLow.addEventListener('click', () => {
    currentSort = 'Price, high to low';
    updateList(PRODUCTS);
})