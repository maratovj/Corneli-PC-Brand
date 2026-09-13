import { LAPTOPS, OVERVIEW_DATA } from './product-data.js'
import  { filter } from './overview.js';
import { makeCard } from './card.js';

const list = document.querySelector('.catalogue-section__list');

list.addEventListener('click', event => {
    filter(event, OVERVIEW_DATA);
});

makeCard(LAPTOPS);