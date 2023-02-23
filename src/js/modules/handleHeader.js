import { ifItemExist } from '../utils/ifItemExist';

const header = document.querySelector('.js-header');

const screenHeight = window.innerHeight;

const headerClassName = 'l-header--gray';
const scrolledHeaderClassName = 'l-header--scrolled';

// Type here allowed page by theirs body class name
if (document.body.classList.contains('home')) {
  ifItemExist(header, () => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > screenHeight / 2)
        header.classList.add(headerClassName);
      else header.classList.remove(headerClassName);
    });
  });
}

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
