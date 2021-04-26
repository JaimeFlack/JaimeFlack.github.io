const mainMenu = document.querySelector('.mainMenu');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show(){
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
    mainMenu.style.transition = '.3s ease all';
}
function close(){
    mainMenu.style.top = '-1000px';
    mainMenu.style.transition = '.3s ease all';
}