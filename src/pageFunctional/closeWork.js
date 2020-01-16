import {openedWork} from '../controls';

export default function closeWork() {
  if (openedWork.classList.contains('opened')) {
    openedWork.classList.remove('opened');
  }
}