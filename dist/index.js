menu = (e) => {
 let selectMenu = document.querySelector('#mobile-menu');
 e.name === 'menu' ? (e.name = 'close', selectMenu.style.opacity = 100) : (e.name = 'menu', selectMenu.style.opacity = 0)
}