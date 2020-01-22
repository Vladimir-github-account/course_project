import {openedEvent, openedEventImage} from '../controls';

export default function openWork( e ) {
  if (e.currentTarget.childNodes[0].naturalWidth) {
    openedEventImage.src = e.currentTarget.childNodes[0].src;
    openedEvent.classList.add('opened');
  }
}