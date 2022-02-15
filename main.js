const toggleBtn = document.querySelector("#nav-toggle");
const navMenu = document.querySelector("#nav-menu");

function menu() {
    navMenu.classList.toggle('show');
    toggleBtn.classList.toggle('bx-menu');
    toggleBtn.classList.toggle('bx-x');
}
/*-----------------------------------*/
/*-----------------------------------*/
/*----- ACTIVE NavLink by scroll ----*/
var navLink = new Array();

window.onscroll = function() {
    myFunction()
};

function myFunction() {
    navLink[0] = document.querySelector('#home');
    navLink[1] = document.querySelector('#about');
    navLink[2] = document.querySelector('#menu');
    navLink[3] = document.querySelector('#reservation');
    for (let i = 0; i < navLink.length; i++) {
        var yTop = navLink[i].offsetTop - navLink[i].offsetHeight / 8;
        var yBottom = navLink[i].offsetTop + navLink[i].offsetHeight / 3;
        if (window.pageYOffset >= yTop && window.pageYOffset <= yBottom) {
            navLinks.forEach(n => n.classList.remove('active'));
            navLinks[i].classList.add("active");
        }
    }
}
/*-----------------------------------*/
/*------ ACTIVE NavLink in menu -----*/
const navLinks = document.querySelectorAll('.nav_link');

function linkAction() {
    /*----- Active link -----*/
    navLinks.forEach(n => n.classList.remove('active'));
    this.classList.add('active');
    menu()
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*-----------------------------------*/
/*==================== DARK LIGHT THEME ====================*/

const themeButton = document.getElementById('theme-button');
const myLogo = document.getElementById('my-logo');

const darkTheme = 'dark-theme'
const selectedTheme = localStorage.getItem('selected-theme')
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'

if (selectedTheme === 'dark') {
    document.body.classList.toggle('dark-theme');
    themeButton.classList.add('bx-sun');
    themeButton.classList.remove('bx-moon');
}
localStorage.setItem('selected-theme', getCurrentTheme())

themeButton.onclick = function() {
    if (document.body.classList.contains(darkTheme)) {
        document.body.classList.toggle('dark-theme');
        themeButton.classList.remove('bx-sun');
        themeButton.classList.add('bx-moon');
    } else {
        document.body.classList.toggle('dark-theme');
        themeButton.classList.add('bx-sun');
        themeButton.classList.remove('bx-moon');
    }
    localStorage.setItem('selected-theme', getCurrentTheme())
}

/*-----------------------------------*/