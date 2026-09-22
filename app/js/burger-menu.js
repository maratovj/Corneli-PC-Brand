export function toggleClass(arg1, arg2, arg3) {
    arg1.classList.toggle('burger-menu--active');
    arg2.classList.toggle('overlay--active');
    arg3.classList.toggle('is-active')
    document.body.classList.toggle('menu-open');
}

export function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
