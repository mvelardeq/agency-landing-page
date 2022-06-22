const btnHamburger = document.getElementById('hamburger-icon'),
listMenu = document.getElementById('list-menu')

btnHamburger.addEventListener('click',e=>{
    console.log('hola')
    listMenu.classList.toggle('menu-show')
})