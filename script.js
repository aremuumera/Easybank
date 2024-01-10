const openMenu = document.querySelector('.open-menu ');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const navContent = document.querySelector('.nav-content');
const animateMenu = document.querySelector('.slide-in-right');



openMenu.addEventListener('click', () => {
    navContent.classList.add('open');
    closeMenu.classList.add('open');
    openMenu.classList.add('close');
    menuAnimate ();
});

closeMenu.addEventListener('click', () => {
    navContent.classList.add('close');
    openMenu.classList.add('open');
    closeMenu.classList.remove('open');
})

function menuAnimate () {
    animateMenu.classList.add('slide-in-right');
}






























// openMenu.addEventListener('click', () => {
//     openMenu.classList.toggle('close');
//     closeMenu.classList.add('open')
//     displayNav();
// });

// closeMenu.addEventListener('click', () => {
//     openMenu.style.display = 'block';
//     closeMenu.classList.toggle('close');
//     displayNav();
// });


// const displayNav = () => {
//     if (window.innerWidth <= 1028) {
//         if (openMenu.style.display = 'none') {
//             navContent.classList.add('open');  
//         } 
//         else if (openMenu.style.display = 'block') {
//             navContent.classList.remove('open');
//         } 
//         else {
//             return false;
//         }
//     }
//     return ;
// }