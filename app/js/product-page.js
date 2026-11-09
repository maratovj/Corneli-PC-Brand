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
        { label: product.name }
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
    const price = createElement(
        'p', `${BLOCK}__price`,
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(product.price));
    const desc = createElement('p', `${BLOCK}__description`, '');
    const action = createElement('button', `${BLOCK}__button`, 'Add to cart');

    heading.append(type, title, price);
    infoContainer.replaceChildren(
        renderBreadcrumbs(product),
        heading,
        renderColors(product.colors),
        desc,
        action
    );

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

function renderGallery(product) {
    const imageFrame = createElement('div', `${BLOCK}__image-frame`);
    const image = createElement('img', `${BLOCK}__image`);
    const imageCount = createElement('span', `${BLOCK}__image-count`);
    const thumbnails = createElement('div', `${BLOCK}__thumbnails`);

    image.src = product.gallery[0];
    imageCount.textContent = formatCounter(product.gallery.length[0], product.gallery.length);

    product.gallery.forEach(img => {
        const thumbnail = createElement('div', `${BLOCK}__thumbnail`);
        const image = createElement('img', `${BLOCK}__thumbnail-image`);
        image.src = product.gallery[1]
        thumbnail.append(image);
        thumbnails.append(thumbnail);
    })


    imageFrame.append(image, imageCount, thumbnails);
    galleryContainer.replaceChildren(imageFrame)
}

if (infoContainer && galleryContainer) {
    renderInfo(product);
    renderGallery(product);
}