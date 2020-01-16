import {openedWork, openedWorkImage} from '../controls';

export default function openWork( e ) {
  if (e.currentTarget.childNodes[0].naturalWidth) {
    openedWorkImage.src = e.currentTarget.childNodes[0].src;
    openedWork.classList.add('opened');
  }
}