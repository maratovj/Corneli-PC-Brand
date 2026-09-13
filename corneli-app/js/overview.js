const title = document.querySelector('.catalogue-section__title');
const subtitle = document.querySelector('.catalogue-section__subtitle');

export function filter(event, arr) {
    const buttonId = event.target.dataset.id;
    const filterItem = arr.find(item => item.id === buttonId);
    
    if (!filterItem) return;
    
    title.style.animation = 'from-bottom 2s ease'
    title.textContent = filterItem.title;
    subtitle.style.animation = 'from-bottom 2s ease'
    subtitle.textContent = filterItem.text;
}

