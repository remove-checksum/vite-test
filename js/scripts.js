const menu = document.querySelector('.menu');
const menuBTN = document.querySelector('.menu-trigger');

function openMenu(){
 this.classList.toggle('open');
 menu.classList.toggle('open');
}

menuBTN.addEventListener('click', openMenu)