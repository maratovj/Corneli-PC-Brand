document.addEventListener('componentsLoaded', () => {
    const menu = document.querySelector('.header__link-container');
    const overlay = document.querySelector('.overlay');
    const burgerMenu = document.querySelector('.header__burger-menu');
    const backToTopButton = document.querySelector('.to-top');

    if (menu && overlay && burgerMenu) {
        const toggleMenu = () => {
            burgerMenu.classList.toggle('burger-menu--active');
            overlay.classList.toggle('overlay--active');
            menu.classList.toggle('is-active');
            document.body.classList.toggle('menu-open');
        };

        burgerMenu.addEventListener('click', toggleMenu);
        overlay.addEventListener('click', toggleMenu);
    }

    backToTopButton?.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});