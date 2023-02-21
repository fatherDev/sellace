const hamburger = document.querySelector('.js-hamburger');
const mobileMenu = document.querySelector('.js-mobile-menu');
const mobileNav = document.querySelector('.js-mobile-nav');
const html = document.querySelector('html');

hamburger.addEventListener('click', (e) => {
  hamburger.classList.toggle('is-active');
  mobileMenu.classList.toggle('is-active');
  mobileNav.classList.toggle('is-active');
  html.classList.toggle('is-blocked');
});
