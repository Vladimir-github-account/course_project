import {nav} from '../controls';

let isDisplayed = false;
export default function closeNavigation() {
  if (isDisplayed) {
    nav.classList.remove('displayed');
  } else {
    nav.classList.add('displayed');
  }
  isDisplayed = !isDisplayed;
}