const slider = document.querySelector('.slides');
const images = document.querySelectorAll('.slides img');

let counter = 1;
const size = images[0].clientWidth;

slider.style.transform = 'translateX(' + (-size * counter) + 'px)';

setInterval(() => {
    counter++;
    slider.style.transition = 'transform 0.5s ease-in-out';
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
}, 4000);

slider.addEventListener('transitionend', () => {
    if (images[counter].id === 'lastClone') {
        slider.style.transition = 'none';
        counter = images.length - 2;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (images[counter].id === 'firstClone') {
        slider.style.transition = 'none';
        counter = images.length - counter;
        slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});
