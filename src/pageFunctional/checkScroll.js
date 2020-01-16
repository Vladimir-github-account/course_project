import {header} from '../controls';

export default function checkScroll() {
  let scroll = window.scrollY;
  if (scroll >= 50) {
    header.classList.add('fixed');
  } else {
    header.classList.remove('fixed');
  }
}