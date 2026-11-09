// Wrap code in a DOMContentLoaded listener to ensure elements exist
document.addEventListener('componentsLoaded', () => {
    const cartButton = document.querySelector('.cart-button');
    const closeModal = document.querySelector('.close-bag-modal');
    const bagModalContainer = document.querySelector('.bag-modal__container');
    const windowWrapper = document.querySelector('.window-wrapper');

    // Add a null check to prevent errors if the button isn't on the current page
    if (cartButton && bagModalContainer) {
        cartButton.addEventListener('click', () => {
            windowWrapper.classList.add('window-wrapper--appear');
            bagModalContainer.classList.add('bag-modal__container--appear');
        });
        closeModal.addEventListener('click', () => {
            windowWrapper.classList.remove('window-wrapper--appear');
            bagModalContainer.classList.remove('bag-modal__container--appear');
        })
    }
});

