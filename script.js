const openMenu = document.querySelector('.open-menu ');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const navContent = document.querySelector('.nav-content');
const animateMenu = document.querySelector('.slide-in-right');



openMenu.addEventListener('click', () => {
    navContent.classList.add('open');
    closeMenu.classList.add('open');
    openMenu.classList.add('close');
    animateMenu.classList.add('slide-in-right');
});

closeMenu.addEventListener('click', () => {
    navContent.classList.add('close');
    openMenu.classList.add('open');
    closeMenu.classList.remove('open');
})

























