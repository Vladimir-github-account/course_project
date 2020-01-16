import {HEADER_HEIGHT}   from '../constants';
import {closeNavigation} from './index.js';
import {scrollTo}        from '../utils/index.js';

export default function navLinkClickHandler( e ) {
  e.preventDefault();
  const element = document.querySelector(this.getAttribute('href'));
  scrollTo(element.offsetTop - HEADER_HEIGHT);
  closeNavigation();
}