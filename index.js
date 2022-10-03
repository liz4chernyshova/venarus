let menubtn = document.querySelector('.menu-button');
let menu = document.querySelector('.menu');
let menuBtnClose = menu.querySelector('.menu-nav__button_close');
let iconHover = document.querySelector('.description-item__info');
let textPopup = document.querySelector('.description-item__text_hover');

menubtn.addEventListener('click', function() {
    menu.classList.toggle('active');
});

menuBtnClose.addEventListener('click', function() {
    menu.classList.remove('active');
});

iconHover.addEventListener('mouseover', function() {
    textPopup.classList.toggle('active');
});

let offset = 0;
const sliderLine = document.querySelector('.opinion-gallery__slider');
var timer;

document.querySelector('.dot').onclick = showSlide;
autoSlide();

function showSlide() {
    var dots = document.getElementsByClassName('dot');
    offset = offset + 807;
    if ( offset > 807 ) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
    autoSlide();
}

function autoSlide() {
    timer = setTimeout(showSlide, 3000);
}
