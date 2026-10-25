import { PRODUCTS } from "./product-data.js";

const BRAND = 'CORNELI';
const BLOCK = 'product-hero';
const URLS = { home: 'index.html', catalogue: 'catalogue.html' };

const infoContainer = document.querySelector('.product-hero__info');
const galleryContainer = document.querySelector('.product-hero__gallery');
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

function renderBreadcrumbs(product) {
    const categoryName = product ? capitalize(product.category) : '';
    const breadcrumds = createElement('nav', `${BLOCK}__breadcrumbs`);
    const links = createElement('ol', `${BLOCK}__breadcrumb-list`);
    
    const items = [
        { label: 'Home', href: URLS.home },
        { label: 'Product', href: URLS.catalogue },
        { label: categoryName, href: URLS.catalogue },
        { label: product.name}
    ];

    items.forEach(item => {
        const linkItem = createElement('li', `${BLOCK}__breadcrumb-item`);

        if (item.href) {
            const link = createElement('a', `${BLOCK}__breadcrumb-link`, item.label);
            link.href = item.href;
            linkItem.append(link);
        } else {
            const current = createElement('span', `${BLOCK}__breadcrumb-current`, item.label);
            linkItem.append(current);
        }
        links.append(linkItem);
    })
    breadcrumds.append(links)

    return breadcrumds;
}

function renderInfo(product) {
    const heading = createElement('div', `${BLOCK}__heading`);
    const type = createElement('span', `${BLOCK}__type`, product.type);
    const title = createElement('h1', `${BLOCK}__title`, product.name);
    const price = createElement('p', `${BLOCK}__price`, product.price);
    const desc = createElement('p', `${BLOCK}__description`, product.id);
    const button = createElement('button', `${BLOCK}__cart-btn`, 'Add to cart');

    heading.append(type, title, price, desc, button);

    return heading;
}

function renderColors(colors) {
    const section = createElement('fieldset', `${BLOCK}__color-section`);
    const legend = createElement('legend', `${BLOCK}__color-title`, 'Colors:');
    const swatches = createElement('div', `${BLOCK}__swatches`);
    
    colors.forEach(color => {
        const swatch = createElement('button', `${BLOCK}__swatch`);
        swatch.type = 'button';
        swatch.title = color;

        swatches.append(swatch);
    })
    section.append(legend, swatches);
    
    return section;
}

infoContainer.replaceChildren(
    renderBreadcrumbs(product),
    renderInfo(product),
    renderColors(product.colors)
)