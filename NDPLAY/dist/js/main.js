const menuBtn = document.querySelector('.menu-btn');
const hamburger = document.querySelector('.menu-btn__burger');
const items = document.querySelector('.curtain');


let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    console.log('CLick...')
    if(!showMenu) {
        hamburger.classList.add('open');
        items.classList.add('open');


        showMenu = true;
    }  else {
        hamburger.classList.remove('open');
        items.classList.remove('open');

        showMenu = false;
    }
}