const cardContainer = document.querySelector('.catalogue-section__product-grid');

export function makeCard(arr) {
     const result = arr.map(item => {
        const card = document.createElement('div');
        card.classList.add('catalogue-section__card');

        const img = document.createElement('img');
        img.classList.add('catalogue-section__card-image')
        img.src = item.image;

        const title = document.createElement('h2');
        title.classList.add('catalogue-section__card-title');
        title.textContent = item.name;

        const type = document.createElement('p');
        type.classList.add('catalogue-section__card-type');
        type.textContent = item.type;

        const price = document.createElement('span');
        price.classList.add('catalogue-section__card-price');
        price.textContent = item.price;

        card.append(img, title, type, price);
        cardContainer.append(card);
    });

    return result;
}
