
// Menu responsivo

const btnMobile = document.getElementById('btn-mobile');
const closeMenu = document.getElementById('close=main-menu');

function toggleMenu() {
    console.log('foi');
    const nav = document.querySelector('.template-part-header-top');
    nav.classList.toggle('active')
}

btnMobile.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu)