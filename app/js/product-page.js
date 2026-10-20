import { PRODUCTS } from './product-data.js';

const infoContainer = document.querySelector('.product-hero__info');
const galleryContainer = document.querySelector('.product-hero__gallery');
const productId = new URLSearchParams(window.location.search).get('id');
const product = PRODUCTS.find(item => String(item.id) === productId);

function createElement(tagName, className, text) {
    const element = document.createElement(tagName);
    element.className = className;

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

function renderNotFound() {
    document.title = 'Product not found | CORNELI';

    const message = createElement('div', 'product-hero__not-found');
    const title = createElement('h1', 'product-hero__title', 'Product not found');
    const description = createElement(
        'p',
        'product-hero__description',
        'This product may have been removed or the link may be incorrect.'
    );
    const link = createElement('a', 'product-hero__button', 'Browse all products');
    link.href = 'catalogue.html';

    message.append(title, description, link);
    infoContainer.replaceChildren(message);
}

function renderBreadcrumbs(product) {
    const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    const breadcrumb = createElement('nav', 'product-hero__breadcrumbs');
    breadcrumb.setAttribute('aria-label', 'Breadcrumb');

    const list = createElement('ol', 'product-hero__breadcrumb-list');
    const items = [
        { label: 'Home', href: 'index.html' },
        { label: 'Products', href: 'catalogue.html' },
        { label: categoryName, href: 'catalogue.html' },
        { label: product.name }
    ];

    items.forEach((item, index) => {
        const listItem = createElement('li', 'product-hero__breadcrumb-item');

        if (item.href) {
            const link = createElement('a', 'product-hero__breadcrumb-link', item.label);
            link.href = item.href;
            listItem.append(link);
        } else {
            const current = createElement('span', 'product-hero__breadcrumb-current', item.label);
            current.setAttribute('aria-current', 'page');
            listItem.append(current);
        }

        list.append(listItem);

        if (index < items.length - 1) {
            const separator = createElement('li', 'product-hero__breadcrumb-separator', '/');
            separator.setAttribute('aria-hidden', 'true');
            list.append(separator);
        }
    });

    breadcrumb.append(list);
    return breadcrumb;
}

function renderColors(colors) {
    const section = createElement('fieldset', 'product-hero__color-section');
    const legend = createElement('legend', 'product-hero__color-title', 'Color:');
    const swatches = createElement('div', 'product-hero__swatches');

    colors.forEach((color, index) => {
        const swatch = createElement('button', 'product-hero__swatch');
        swatch.type = 'button';
        swatch.style.backgroundColor = color;
        swatch.title = color;
        swatch.setAttribute('aria-label', color);
        swatch.setAttribute('aria-pressed', String(index === 0));

        if (index === 0) {
            swatch.classList.add('product-hero__swatch--selected');
        }

        swatch.addEventListener('click', () => {
            swatches.querySelectorAll('.product-hero__swatch').forEach(button => {
                button.classList.remove('product-hero__swatch--selected');
                button.setAttribute('aria-pressed', 'false');
            });

            swatch.classList.add('product-hero__swatch--selected');
            swatch.setAttribute('aria-pressed', 'true');
        });

        swatches.append(swatch);
    });

    section.append(legend, swatches);
    return section;
}

function renderInfo(product) {
    const categoryName = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    const heading = createElement('div', 'product-hero__heading');
    const type = createElement('p', 'product-hero__type', product.type);
    const title = createElement('h1', 'product-hero__title', product.name);
    const price = createElement(
        'p',
        'product-hero__price',
        new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 0
        }).format(product.price)
    );
    const description = createElement(
        'p',
        'product-hero__description',
        `Explore the CORNELI ${product.type.toLowerCase()}, part of our ${categoryName.toLowerCase()} collection.`
    );
    const action = createElement('a', 'product-hero__button', 'Explore all products');
    action.href = 'catalogue.html';

    heading.append(type, title, price);
    infoContainer.replaceChildren(
        renderBreadcrumbs(product),
        heading,
        renderColors(product.colors),
        description,
        action
    );
}

function renderGallery(product) {
    const images = product.gallery?.length ? product.gallery : [product.image];
    const mainImage = createElement('img', 'product-hero__image');
    const thumbnails = createElement('div', 'product-hero__thumbnails');
    const imageCount = createElement('span', 'product-hero__image-count');

    mainImage.alt = product.name;
    mainImage.src = images[0];
    imageCount.textContent = `01 / ${String(images.length).padStart(2, '0')}`;

    images.forEach((image, index) => {
        if (images.length < 2) {
            return;
        }

        const thumbnail = createElement('button', 'product-hero__thumbnail');
        const thumbnailImage = createElement('img', 'product-hero__thumbnail-image');

        thumbnail.type = 'button';
        thumbnail.setAttribute('aria-label', `View product image ${index + 1}`);
        thumbnail.setAttribute('aria-pressed', String(index === 0));
        thumbnailImage.src = image;
        thumbnailImage.alt = '';
        thumbnail.append(thumbnailImage);

        if (index === 0) {
            thumbnail.classList.add('product-hero__thumbnail--selected');
        }

        thumbnail.addEventListener('click', () => {
            mainImage.src = image;
            imageCount.textContent = `${String(index + 1).padStart(2, '0')} / ${String(images.length).padStart(2, '0')}`;
            thumbnails.querySelectorAll('.product-hero__thumbnail').forEach(button => {
                button.classList.remove('product-hero__thumbnail--selected');
                button.setAttribute('aria-pressed', 'false');
            });

            thumbnail.classList.add('product-hero__thumbnail--selected');
            thumbnail.setAttribute('aria-pressed', 'true');
        });

        thumbnails.append(thumbnail);
    });

    const imageFrame = createElement('div', 'product-hero__image-frame');
    imageFrame.append(mainImage);

    if (images.length > 1) {
        imageFrame.append(imageCount);
        galleryContainer.replaceChildren(imageFrame, thumbnails);
    } else {
        galleryContainer.replaceChildren(imageFrame);
    }
}

if (infoContainer && galleryContainer) {
    if (product) {
        document.title = `${product.name} | CORNELI`;
        renderInfo(product);
        renderGallery(product);
    } else {
        renderNotFound();
        galleryContainer.remove();
    }
}