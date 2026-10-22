import { PRODUCTS } from "./product-data";

const BRAND = 'CORNELI';
const BLOCK = 'product-hero';
const URLS = {home: 'index.html', catalogue: 'catalogue.html'};

const infoContainer = document.querySelector('product-hero__info');
const galleryContainer = document.querySelector('product-hero__gallery');
const productId = new URLSearchParams(window.location.search).get('id');
const product = PRODUCTS.find(item => String(item.id) === productId); 

const priceFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
})

const capitalize = (value = '') => value.charAt(0).toUpperCase() + value.slice(1);
const pad = number => String(number).padStart(2, '0');
const formatCounter = (index, total) => `${pad(index + 1)} / ${pad(total)}`;

function createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    
    if (className) element.className = className;

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

