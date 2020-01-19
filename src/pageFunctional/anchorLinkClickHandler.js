import {HEADER_HEIGHT} from '../constants';
import {scrollTo}      from '../utils/index.js';

export default function anchorLinkClickHandler( e ) {
  e.preventDefault();
  const element = document.querySelector(e.target.getAttribute('href'));
  scrollTo(element.offsetTop - HEADER_HEIGHT);
}