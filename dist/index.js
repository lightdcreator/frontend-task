menu = (e) => {
    let selectMenu = document.querySelector('#mobile-menu');
    e.name === 'menu' ? e.name = 'close' : e.name = 'menu'
   }