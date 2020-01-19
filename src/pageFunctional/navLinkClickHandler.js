import {closeNavigation, anchorLinkClickHandler} from './index.js';

export default function navLinkClickHandler( e ) {
  anchorLinkClickHandler(e);
  closeNavigation();
}