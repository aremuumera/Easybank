const openMenu = document.querySelector('.open-menu ');
const closeMenu = document.querySelector('.close-menu');
const menu = document.querySelector('.menu');
const navContent = document.querySelector('.nav-content');
const animateMenu = document.querySelector('.slide-in-right');



function OpenMenuValidation ()  {
    navContent.classList.add('open');
    navContent.classList.add('slide-in-right');
    closeMenu.style.display  = 'block';
    openMenu.style.display = 'none';
};
openMenu.addEventListener('click', OpenMenuValidation);


function closeMenuValidation ()  {
    navContent.classList.remove('open');
    // closeMenu.classList.remove('open');
    // openMenu.classList.add('close');
    closeMenu.style.display  = 'none';
    openMenu.style.display = 'block';
   
};
closeMenu.addEventListener('click', closeMenuValidation);



// if(openMenu.style.display === 'block' && OpenMenuValidation ()) {
//     closeMenu.classList.add('open');
//     openMenu.classList.remove('open');
// }else if (closeMenu.style.display === 'block'  && closeMenuValidation()){
//     closeMenu.classList.remove('open');
//     openMenu.classList.add('open');
// }






























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