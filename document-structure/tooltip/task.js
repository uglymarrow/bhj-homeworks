const tooltipElements = Array.from(document.getElementsByClassName('has-tooltip'));

tooltipElements.forEach(tooltipElement => {
    tooltipElement.insertAdjacentHTML('afterEnd',
         `<div class="tooltip">${tooltipElement.getAttribute('title')}</div>`);

    tooltipElement.addEventListener('click', (event) => {
        let tooltip = tooltipElement.nextElementSibling;
        tooltip.style.left = `${tooltipElement.getBoundingClientRect().left}px` ;
        tooltip.classList.toggle('tooltip_active');
        
        event.preventDefault();
    });
});