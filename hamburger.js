const button = document.querySelector('.hamburger');
const sideList = document.querySelector('.hamburger-section');
const linkElement = document.querySelectorAll('.hamburger-section__item');


button.addEventListener('click', () => {
    button.classList.toggle('hamburger--open');
    sideList.classList.toggle('hamburger-section--active');

});

[...linkElement].forEach(function (item) {
    item.addEventListener('click', function () {
        button.classList.toggle('hamburger--open');
        sideList.classList.toggle('hamburger-section--active');
    });
})