import {openedWork} from '../controls';
import {closeWork}  from './index.js';

export default function openedWorkMouseUpHandler( e ) {
  if (e.target === openedWork) {
    closeWork();
  }
}