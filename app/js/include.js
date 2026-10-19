async function includeComponents() {
    const includes = document.querySelectorAll('[data-include]');

    await Promise.all([...includes].map(async element => {
        const file = element.getAttribute('data-include');
        const response = await fetch(file);
        const html = await response.text();

        element.outerHTML = html;
    }));

    document.dispatchEvent(new Event('componentsLoaded'));
}

includeComponents();