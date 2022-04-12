//   Name: Aliasgar Gandhi.
//   Student ID: 2122332

document.addEventListener('DOMContentLoaded', runScript);

function runScript(){
    btn_verticle_menu = document.getElementById('btVerticleMenu');
    btn_verticle_menu.addEventListener('click', showVerticleMenu);
}

function showVerticleMenu(){
    menus = document.getElementById('VMenu');

    if(menus.style.display == 'flex')
        menus.style.display = 'none';

    else
        menus.style.display = 'flex'
}

