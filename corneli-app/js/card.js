const cardContainer = document.querySelector('.catalogue-section__product-grid');

export function renderCards(products) {
    cardContainer.replaceChildren();

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('catalogue-section__card');

        const img = document.createElement('img');
        img.classList.add('catalogue-section__card-image')
        img.src = product.image;
        img.alt = product.name;

        const featured = document.createElement('button');
        featured.classList.add('card-featured');
        featured.innerHTML = `
       <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
  <title>favorite-light</title>
  <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" d="m4.45 13.908l6.953 6.531c.24.225.36.338.5.366a.5.5 0 0 0 .193 0c.142-.028.261-.14.5-.366l6.953-6.53a5.203 5.203 0 0 0 .549-6.983l-.31-.399c-1.968-2.536-5.918-2.111-7.301.787a.54.54 0 0 1-.974 0C10.13 4.416 6.18 3.99 4.212 6.527l-.31.4a5.203 5.203 0 0 0 .549 6.981Z"/>
</svg>
`;
        const infoBlock = document.createElement('div');
        infoBlock.classList.add('card-info-block');

        const title = document.createElement('h2');
        title.classList.add('catalogue-section__card-title');
        title.textContent = product.name;
        const type = document.createElement('p');
        type.classList.add('catalogue-section__card-type');
        type.textContent = product.type;

        const price = document.createElement('span');
        price.classList.add('catalogue-section__card-price');
        price.textContent = '$' + product.price;

        const colors = document.createElement('div');
        colors.classList.add('card-color-container');

        product.colors.forEach(colorName => {
            const color = document.createElement('button');
            color.classList.add('card-color');
            color.title = colorName;
            color.dataset.color = colorName;
            color.style.background = colorName;

            colors.append(color);
        })

        infoBlock.append(title, type, price, colors);
        card.append(img, featured, infoBlock);
        cardContainer.append(card);
    })

}
