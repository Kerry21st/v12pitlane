// Создание скрипта для кнопки меню
const menuBlock = document.getElementById("menu-line-block");
const menuLine = document.querySelectorAll(".menu-line");

const mainWindowMenu = document.getElementById('menu-window');

menuBlock.onclick = function () {
    menuBlock.classList.toggle('close-btn');
    menuLine.forEach(function(menuLine) {
        menuLine.classList.toggle('close-line')
    })

    document.body.classList.toggle("no-scroll"); // блокируем прокрутку
    mainWindowMenu.classList.toggle('open-main-menu-window');
}

