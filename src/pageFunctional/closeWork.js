import {openedEvent} from '../controls';

export default function closeWork() {
  if (openedEvent.classList.contains('opened')) {
    openedEvent.classList.remove('opened');
  }
}