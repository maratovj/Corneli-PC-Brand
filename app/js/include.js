document.querySelectorAll('[data-include]').forEach(async el => {
    const file = el.getAttribute('data-include');
    const html = await fetch(file).then(r => r.text());
    el.outerHTML = html;
});