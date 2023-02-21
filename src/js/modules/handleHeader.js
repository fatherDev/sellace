import { ifItemExist } from '../utils/ifItemExist';

const header = document.querySelector('.js-header');

const scrolledHeaderClassName = 'l-header--scrolled';

ifItemExist(header, () => {
  let prevScrollPos = window.scrollY;
  document.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;
    if (prevScrollPos < currentScrollPos) {
      header.classList.add(scrolledHeaderClassName);
    } else {
      header.classList.remove(scrolledHeaderClassName);
    }
    prevScrollPos = window.scrollY;
  });
});
