// hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

let header = document.querySelector("header");
const animasi = document.querySelector("#animasi");
window.addEventListener("scroll", () => {
  let pos = window.scrollY > 0;
  header.classList.toggle("nav-fixed", pos);
  animasi.classList.toggle("fixed", pos);
});

// navbar-fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}