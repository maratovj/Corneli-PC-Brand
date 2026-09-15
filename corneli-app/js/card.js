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

        const title = document.createElement('h2');
        title.classList.add('catalogue-section__card-title');
        title.textContent = product.name;

        const type = document.createElement('p');
        type.classList.add('catalogue-section__card-type');
        type.textContent = product.type;

        const price = document.createElement('span');
        price.classList.add('catalogue-section__card-price');
        price.textContent = '$' + product.price;

        card.append(img, title, type, price);
        cardContainer.append(card);
    })

}
